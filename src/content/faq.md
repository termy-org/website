---
title: FAQ
description: Frequently asked questions about Termy
order: 2
category: Help & Troubleshooting
---

# Frequently Asked Questions

> For: end users

## General Questions

### Is Termy free?

**Yes**. Termy is completely free and open source, released under the MIT license. You can use it for personal or commercial projects without cost.

### Is Termy stable?

Termy is currently in **beta**. While it's stable for daily use, you may encounter occasional bugs. We recommend:
- Keeping your config backed up
- Reporting issues on GitHub
- Updating regularly for fixes

### How is Termy different from other terminals?

| Feature | Termy | Typical Terminal |
|---------|-------|----------------|
| GPU-accelerated | Yes | Rarely |
| Memory usage | ~18MB | 100-300MB+ |
| Startup time | ~8ms | 50-200ms |
| Built with | Rust | Electron/C++ |
| Config file | Single text file | Often complex |

### Can I use Termy for work/commercial projects?

Absolutely! The MIT license permits commercial use. No attribution required (though appreciated).

---

## Installation & Updates

### How do I install Termy?

**macOS** (Homebrew - easiest):
```bash
brew install --cask termy-org/termy/termy
```

**Arch Linux**:
```bash
paru -S termy-bin
```

**Other**: Download from [GitHub Releases](https://github.com/lassejlv/termy/releases)

See [Installation Guide](/docs/installation) for detailed instructions.

### How do I update Termy?

**Automatic**: Use the Command Palette (`Cmd/Ctrl + P`) → "Check for updates"

**Package Managers**:
```bash
# macOS
brew upgrade --cask termy

# Arch Linux
paru -S termy-bin
```

**Manual**: Download the latest release and replace the app.

### Is Termy available on my platform?

| Platform | Status | Method |
|----------|--------|--------|
| macOS | ✅ Supported | Homebrew, DMG |
| Windows | ✅ Supported | Setup.exe |
| Linux (x64) | ✅ Supported | AppImage, tarball |
| Arch Linux | ✅ Supported | AUR |
| Linux (ARM) | 🔄 Planned | Future release |

### Why isn't Termy code-signed?

Code signing certificates are expensive ($200-500/year). As an open-source project, we're evaluating options:
- Community funding for certificates
- Free certificates (e.g., SignPath for Windows)
- Self-signed with manual trust

For now, you'll need to bypass security warnings on first launch. See [Installation](/docs/installation) for platform-specific steps.

---

## Configuration

### Where is the config file?

```
~/.config/termy/config.txt
```

Create it if it doesn't exist:
```bash
mkdir -p ~/.config/termy
touch ~/.config/termy/config.txt
```

### Do I need to restart Termy after changing config?

**No!** Changes apply immediately. This is one of Termy's best features—tweak and see instantly.

### Can I import my config from another terminal?

Not automatically, but you can manually translate:

- **iTerm2**: Colors can be exported and converted
- **Alacritty**: Similar config structure, easy to adapt
- **Windows Terminal**: JSON to Termy's format

Example conversion from Alacritty:
```yaml
# Alacritty
font:
  normal:
    family: JetBrains Mono
  size: 14
```

```txt
# Termy
font_family = JetBrains Mono
font_size = 14
```

### What's the difference between `config.txt` and the UI settings?

They're the same thing! The UI settings editor just writes to `config.txt`. Use whichever you prefer:
- **UI**: Good for discovery and quick changes
- **Text file**: Good for bulk edits, version control, comments

---

## Features

### Does Termy support tabs?

Yes! Tabs are a core feature:
- `Cmd/Ctrl + T` — New tab
- `Cmd/Ctrl + W` — Close tab
- `Cmd/Ctrl + Shift + [/]` — Switch tabs
- Drag to reorder
- Right-click to rename

### Can I split panes/windows?

Pane splitting is planned for a future release. Currently, use tabs for multiple sessions.

### Does Termy have scrollback/search?

Yes:
- Scrollback: Configurable (default 2,000 lines; raise `scrollback_history` for more)
- Search: `Cmd/Ctrl + F` to find in buffer
- Regex search: Supported
- Case sensitivity: Toggle with `Cmd/Ctrl + Alt + C`

### Is there a command palette?

Yes! Press `Cmd/Ctrl + P` for the command palette. Access:
- All actions
- Settings
- Theme switching
- Update checking
- Keyboard shortcuts

### Does Termy support true color?

Yes. Termy fully supports:
- 24-bit true color
- 256 colors
- ANSI colors
- Undercurl (underlines with colors)

### Can I use my favorite shell?

Absolutely. Termy works with any shell:
- Bash
- Zsh
- Fish
- Nushell
- PowerShell
- Custom shells

Set in config:
```txt
shell = /usr/local/bin/fish
```

---

## Customization

### How do I change the theme?

**Via Command Palette**:
1. `Cmd/Ctrl + P`
2. Type "switch theme"
3. Select from list

**Via Config**:
```txt
theme = catppuccin
```

Built-in themes: `termy`, `catppuccin`, `gruvbox`, `tokyonight`, `github`, `dracula`

### How do I change the font?

```txt
font_family = JetBrains Mono
font_size = 14
```

Find available fonts:
```bash
# macOS
system_profiler SPFontsDataType | grep "Family:"

# Linux
fc-list : family
```

### Can I make the background transparent?

```txt
background_opacity = 0.9    # 0.0-1.0
background_blur = true      # Optional blur effect
```

### How do I customize keybindings?

```txt
# In config.txt
keybind = secondary-p=toggle_command_palette
keybind = secondary-t=new_tab
keybind = cmd-w=unbind    # Disable default
```

See [Keybindings](/docs/keybindings) for full reference.

---

## Troubleshooting

### Why won't Termy launch?

Common causes:
1. **macOS Gatekeeper**: Run `sudo xattr -d com.apple.quarantine /Applications/Termy.app`
2. **Windows SmartScreen**: Click "More info" → "Run anyway"
3. **Broken config**: Move `~/.config/termy/config.txt` aside and restart
4. **Missing dependencies**: Install required libraries

See [Troubleshooting](/docs/troubleshooting) for detailed solutions.

### Why does my config not work?

The fix is almost always file location, syntax (`key = value` with spaces around `=`), a typo in the key name, or an inexact font name. Full checklist in [Troubleshooting → Config Issues](/docs/troubleshooting#config-issues).

### How do I report a bug?

1. Check [existing issues](https://github.com/lassejlv/termy/issues)
2. Include:
   - Termy version (`termy --version`)
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior
   - Your config file (remove sensitive info)

### Where can I get help?

- **Discord**: https://discord.gg/4VDBFD7vAp (fastest response)
- **GitHub Issues**: https://github.com/lassejlv/termy/issues
- **GitHub Discussions**: https://github.com/lassejlv/termy/discussions

---

## Roadmap & Future

### What's planned for Termy?

Near-term:
- Pane splitting
- Plugins/extensions
- Improved search
- Better Windows integration

Long-term:
- Serial/SSH connections
- Plugin API
- More built-in themes

### When will feature X be available?

We don't commit to timelines, but you can:
- Watch the GitHub repository
- Join Discord for updates
- Check the [roadmap](https://github.com/lassejlv/termy/projects)

### Can I request a feature?

Yes! Open a [GitHub Discussion](https://github.com/lassejlv/termy/discussions) or [Issue](https://github.com/lassejlv/termy/issues).

---

## More Questions?

Can't find your answer? Try:
- [Discord Community](https://discord.gg/4VDBFD7vAp)
- [GitHub Discussions](https://github.com/lassejlv/termy/discussions)
- [Documentation](/docs)
