---
title: First Steps
description: Your complete onboarding guide to becoming productive with Termy
order: 1
category: Getting Started
---

# First Steps with Termy

> For: end users

Welcome to Termy! This guide will get you from first launch to productive workflows in minutes. Follow along step-by-step or jump to sections that interest you.

---

## The Basics

### Understanding the Interface

When you open Termy, you'll see:

- **Tab Bar**: At the top, shows open tabs with titles
- **Terminal Area**: The main space where commands run
- **Scrollbar**: Right side, shows your scrollback position
- **Title Bar**: macOS only, window controls

### Your First Commands

Try these to get familiar:

```bash
# See Termy version
termy --version

# Check your shell
echo $SHELL

# See environment variables Termy sets
env | grep TERMY
```

---

## Essential Shortcuts

Master these and you'll fly through Termy:

### Tabs
| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + T` | New tab |
| `Cmd/Ctrl + W` | Close tab |
| `Cmd/Ctrl + Shift + ]` | Next tab |
| `Cmd/Ctrl + Shift + [` | Previous tab |

### Window
| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + P` | Command Palette |
| `Cmd/Ctrl + =` | Zoom in |
| `Cmd/Ctrl + -` | Zoom out |
| `Cmd/Ctrl + 0` | Reset zoom |

### Text
| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + C` | Copy (when text selected) |
| `Cmd/Ctrl + V` | Paste |
| `Cmd/Ctrl + F` | Find/Search |

**Tip**: `Cmd` on macOS, `Ctrl` on Windows/Linux

---

## The Command Palette

The Command Palette is a fuzzy-search overlay for every action Termy can perform. Press `Cmd/Ctrl + P` to open it, start typing to filter, then press `Enter` to execute the highlighted entry.

### What You Can Do

- Switch themes instantly
- Check for updates
- Open settings
- Zoom and resize
- See all keyboard shortcuts

### Example Workflow

1. Press `Cmd/Ctrl + P`
2. Type "theme"
3. Select "Switch Theme"
4. Pick from the list

---

## Configuration Basics

Termy uses a simple text file for configuration.

### Where Is It?

```
~/.config/termy/config.txt
```

Create it if it doesn't exist:
```bash
mkdir -p ~/.config/termy
```

### Essential Settings

```txt
# Appearance
font_family = JetBrains Mono
font_size = 14
theme = termy

# Window
background_opacity = 0.95
padding_x = 12
padding_y = 8

# Terminal
cursor_style = block
cursor_blink = true
scrollback_history = 10000    # Increase from the default of 2000
```

Changes apply immediately—no restart needed!

### Finding Fonts

List available fonts:

```bash
# macOS
system_profiler SPFontsDataType | grep "Family:" | head -20

# Linux
fc-list : family | sort | uniq | head -20
```

Popular choices:
- `JetBrains Mono` (default)
- `Fira Code`
- `SF Mono` (macOS)
- `Cascadia Code`

---

## Tab Management

### Understanding Tab Titles

Termy intelligently names tabs based on:
1. **Manual name**: You renamed it
2. **Shell integration**: Current directory/command
3. **Process**: Running program name
4. **Fallback**: "Terminal"

### Working with Tabs

**Rename a tab**:
1. Right-click tab
2. Select "Rename Tab"
3. Type new name

Or use the Command Palette:
1. `Cmd/Ctrl + P`
2. Type "rename"

### Tab Behavior Settings

```txt
# In config.txt
tab_title_mode = smart
tab_title_shell_integration = true
tab_close_visibility = active_hover
tab_width_mode = active_grow_sticky
```

---

## Search Like a Pro

Press `Cmd/Ctrl + F` to search in the terminal buffer.

### Search Features

- **Case sensitivity**: Toggle with `Cmd/Ctrl + Alt + C`
- **Regex mode**: Toggle with `Cmd/Ctrl + Alt + R`
- **Navigation**: `Cmd/Ctrl + G` for next, `Cmd/Ctrl + Shift + G` for previous

### Example Search

1. Run some commands
2. Press `Cmd/Ctrl + F`
3. Type what you're looking for
4. Use `Cmd/Ctrl + G` to jump through matches

---

## Shell Integration

Termy sets a handful of environment variables in every shell it spawns. There's nothing to install or enable — they're available as soon as your prompt appears:

```bash
TERMY=1                    # Present in every Termy shell
TERMY_PID=12345            # PID of the Termy process hosting this tab
TERMY_TAB_ID=1             # Tab ID, unique within the window
```

Verify they're set:

```bash
env | grep TERMY
```

### Customizing Your Shell

Because `TERMY` is only present inside Termy, you can use it to gate Termy-only tweaks in your shell startup file (`.bashrc`, `.zshrc`, `config.fish`, etc.):

```bash
# Add a rocket to your prompt only when you're running inside Termy
if [ -n "$TERMY" ]; then
    export PS1="🚀 $PS1"
fi
```

---

## Themes

Termy ships with several built-in themes.

### Available Themes

- `termy` (default)
- `catppuccin`
- `gruvbox`
- `tokyonight`
- `github`
- `dracula`

### Switching Themes

Via Command Palette:
1. `Cmd/Ctrl + P`
2. Type "switch theme"
3. Select your theme

Or in config:
```txt
theme = catppuccin
```

### Custom Colors

Override any theme color in config:

```txt
[colors]
background = #1e1e2e
foreground = #cdd6f4
blue = #89b4fa
```

---

## Keyboard Navigation

### Without a Mouse

| Keys | Action |
|------|--------|
| `Cmd/Ctrl + 1-9` | Jump to tab 1-9 |
| `Cmd/Ctrl + Shift + ←/→` | Move tab left/right |
| `Cmd/Ctrl + M` | Minimize window |

### Custom Shortcuts

Add to config:

```txt
# Example: open config with Cmd/Ctrl + Shift + C
keybind = secondary-shift-c=open_config

# Disable default
keybind = secondary-w=unbind
```

See [Keybindings](/docs/keybindings) for full reference.

---

## Common Workflows

### Development Workflow

```bash
# 1. Open Termy
# 2. Split your work:
cd ~/projects/myapp
git status                    # Check changes
# 3. New tab: Cmd/Ctrl + T
npm run dev                   # Start dev server
# 4. Switch tabs: Cmd/Ctrl + Shift + [/]
```

### System Administration

```bash
# Quick SSH sessions
ssh user@server1     # Tab 1
ssh user@server2     # Tab 2 (Cmd/Ctrl + T)
ssh user@server3     # Tab 3 (Cmd/Ctrl + T)

# Rename tabs to identify servers
# Right-click → Rename Tab
```

---

## Staying Updated

Termy checks for updates automatically, or manually:

1. Open Command Palette (`Cmd/Ctrl + P`)
2. Type "check for updates"
3. Follow prompts

Or use package managers:

```bash
# macOS (Homebrew)
brew upgrade --cask termy

# Arch Linux
paru -S termy-bin
```

---

## Getting Help

Stuck? Here's where to go:

1. **Command Palette**: `Cmd/Ctrl + P` → type what you need
2. **Documentation**: You're already here! Check other guides.
3. **GitHub Issues**: https://github.com/lassejlv/termy/issues
4. **Discord Community**: https://discord.gg/4VDBFD7vAp

---

## What's Next?

- [Configuration](/docs/configuration) - Deep dive into all settings
- [Customization Guide](/docs/customization-guide) - Make it yours
- [Keybindings](/docs/keybindings) - Full shortcut reference
