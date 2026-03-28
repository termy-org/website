import type { Plugin } from "vite";
import { promises as fs } from "fs";
import path from "path";

interface DocFile {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  content: string;
}

// Parse frontmatter from markdown
function parseFrontmatter(content: string): { meta: Record<string, string>; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { meta: {}, content };
  }

  const frontmatter = match[1];
  const meta: Record<string, string> = {};

  for (const line of frontmatter.split("\n")) {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      meta[key.trim()] = valueParts.join(":").trim();
    }
  }

  return {
    meta,
    content: content.slice(match[0].length),
  };
}

// Convert slug to title
function toTitle(slug: string): string {
  return slug
    .split("/")
    .pop()!
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Generate brief overview (llms.txt)
function generateBriefOverview(docs: DocFile[]): string {
  const lines: string[] = [
    "# Termy Documentation",
    "",
    "> Termy is a fast, GPU-accelerated terminal emulator built with Rust.",
    "",
    "## Quick Links",
    "",
    "- Website: https://termy.run",
    "- Repository: https://github.com/lassejlv/termy",
    "- Documentation: https://termy.run/docs",
    "",
    "## Overview",
    "",
    "Termy is a modern terminal emulator focused on speed, minimal resource usage, and a clean native experience.",
    "It starts in ~8ms, uses ~18MB of memory, and runs natively on macOS, Windows, and Linux.",
    "",
    "## Documentation Sections",
    "",
  ];

  // Group by category
  const byCategory: Record<string, DocFile[]> = {};
  for (const doc of docs) {
    const cat = doc.category || "General";
    byCategory[cat] ||= [];
    byCategory[cat].push(doc);
  }

  for (const [category, categoryDocs] of Object.entries(byCategory)) {
    lines.push(`### ${category}`);
    lines.push("");
    for (const doc of categoryDocs.sort((a, b) => a.title.localeCompare(b.title))) {
      const url = `https://termy.run/docs/${doc.slug}`;
      lines.push(`- [${doc.title}](${url})${doc.description ? ` — ${doc.description}` : ""}`);
    }
    lines.push("");
  }

  lines.push("## Key Features");
  lines.push("");
  lines.push("- ⚡ **Fast**: GPU-accelerated rendering, ~8ms startup");
  lines.push("- 🪶 **Lightweight**: ~18MB memory footprint");
  lines.push("- 🎨 **Themable**: Built-in themes + custom colors");
  lines.push("- ⌨️ **Configurable**: Simple text-based config");
  lines.push("- 🖥️ **Native**: Runs natively on macOS, Windows, Linux");
  lines.push("");

  lines.push("## Quick Start");
  lines.push("");
  lines.push("```bash");
  lines.push("# macOS");
  lines.push("brew install --cask termy-org/termy/termy");
  lines.push("");
  lines.push("# Arch Linux");
  lines.push("paru -S termy-bin");
  lines.push("```");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("For complete documentation, see https://termy.run/docs");
  lines.push("For full LLM context, use llms-full.txt");
  lines.push("");

  return lines.join("\n");
}

// Generate full documentation (llms-full.txt)
function generateFullDocs(docs: DocFile[]): string {
  const lines: string[] = [
    "# Termy Complete Documentation",
    "",
    "This file contains the complete Termy documentation for LLM context.",
    "Generated from https://github.com/lassejlv/termy",
    "",
    "---",
    "",
  ];

  // Group by category
  const byCategory: Record<string, DocFile[]> = {};
  for (const doc of docs) {
    const cat = doc.category || "General";
    byCategory[cat] ||= [];
    byCategory[cat].push(doc);
  }

  for (const [category, categoryDocs] of Object.entries(byCategory)) {
    lines.push(`# ${category}`);
    lines.push("");

    for (const doc of categoryDocs.sort((a, b) => a.title.localeCompare(b.title))) {
      lines.push(`## ${doc.title}`);
      lines.push("");
      if (doc.description) {
        lines.push(`> ${doc.description}`);
        lines.push("");
      }
      lines.push(`URL: https://termy.run/docs/${doc.slug}`);
      lines.push("");
      lines.push(doc.content.trim());
      lines.push("");
      lines.push("---");
      lines.push("");
    }
  }

  return lines.join("\n");
}

// Load all docs from content directory
async function loadDocs(contentDir: string): Promise<DocFile[]> {
  const docs: DocFile[] = [];

  async function scanDir(dir: string, baseSlug = "") {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Skip plugins directory
        if (entry.name === "plugins") continue;
        await scanDir(fullPath, path.join(baseSlug, entry.name));
      } else if (entry.name.endsWith(".md")) {
        const content = await fs.readFile(fullPath, "utf-8");
        const { meta, content: docContent } = parseFrontmatter(content);

        const slug = path.join(baseSlug, entry.name.replace(".md", ""));

        docs.push({
          slug,
          title: meta.title || toTitle(slug),
          description: meta.description,
          category: meta.category,
          content: docContent,
        });
      }
    }
  }

  await scanDir(contentDir);
  return docs;
}

export function llmsTxtPlugin(): Plugin {
  return {
    name: "llms-txt-generator",
    apply: "build",

    async buildStart() {
      const contentDir = path.resolve(process.cwd(), "src/content");
      const publicDir = path.resolve(process.cwd(), "public");

      try {
        // Load all documentation
        const docs = await loadDocs(contentDir);

        if (docs.length === 0) {
          console.warn("[llms-txt] No documentation files found");
          return;
        }

        // Generate files
        const briefContent = generateBriefOverview(docs);
        const fullContent = generateFullDocs(docs);

        // Ensure public directory exists
        await fs.mkdir(publicDir, { recursive: true });

        // Write files to public directory
        await fs.writeFile(path.join(publicDir, "llms.txt"), briefContent, "utf-8");
        await fs.writeFile(path.join(publicDir, "llms-full.txt"), fullContent, "utf-8");

        console.log(`[llms-txt] Generated llms.txt (${briefContent.length} bytes)`);
        console.log(`[llms-txt] Generated llms-full.txt (${fullContent.length} bytes)`);
        console.log(`[llms-txt] Included ${docs.length} documentation files`);
      } catch (error) {
        console.error("[llms-txt] Error generating files:", error);
      }
    },
  };
}

export default llmsTxtPlugin;
