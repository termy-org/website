---
title: Customization Guide
description: Deep customization of fonts, themes, appearance, and behavior
order: 1
category: Guides
---

# Customization Guide

> For: end users

This guide covers everything you can customize in Termy. From subtle tweaks to complete overhauls, make Termy work exactly how you want.

---

## The Configuration File

Termy uses a simple text-based configuration at:

```
~/.config/termy/config.txt
```

### File Structure

Termy's config is plain text: one `key = value` per line, `#` starts a comment, and `[colors]` introduces the color override section.

```txt
# Top-level settings
font_family = JetBrains Mono
font_size = 14
theme = termy
background_opacity = 0.95

# Section for color overrides
[colors]
background = #1e1e2e
foreground = #cdd6f4
```

### Creating Your Config

```bash
mkdir -p ~/.config/termy
touch ~/.config/termy/config.txt
```

Changes apply immediately — no restart required.

---

## Typography

### Font Family

```txt
font_family = JetBrains Mono
```

**Finding Fonts**:

```bash
# macOS: List all fonts
system_profiler SPFontsDataType | grep "Family:"

# Linux: List with fontconfig
fc-list : family | sort | uniq
```

**Recommended Fonts**:

| Font | Best For | Features |
|------|----------|----------|
| JetBrains Mono | Coding | Excellent ligatures, readable |
| Fira Code | Coding | Ligatures, weights |
| Cascadia Code | Windows | Microsoft designed |
| SF Mono | macOS | Native look |
| Hack | Terminal | Zero distinction |

### Font Size

```txt
font_size = 14          # Pixels
```

Tip: Use `Cmd/Ctrl + =` and `Cmd/Ctrl + -` for temporary zooming.

---

## Window Appearance

### Background Opacity

```txt
background_opacity = 0.95     # 0.0 (fully transparent) to 1.0 (opaque)
```

For a true transparent terminal:
```txt
background_opacity = 0.85
background_blur = true
```

### Background Blur

```txt
background_blur = true        # macOS/Windows
```

Creates a frosted glass effect. Performance impact: minimal on GPU.

### Window Padding

```txt
padding_x = 12      # Left/right padding (pixels)
padding_y = 8       # Top/bottom padding (pixels)
```

Increase for a more spacious feel:
```txt
padding_x = 20
padding_y = 16
```

### Window Dimensions

```txt
window_width = 1280     # Initial width
window_height = 820     # Initial height
```

Termy remembers your last window size automatically.

---

## Cursor Customization

### Style

```txt
cursor_style = block        # block, beam, or underline
```

| Style | Best For |
|-------|----------|
| `block` | Visibility, traditional |
| `beam` | Precise positioning |
| `underline` | Minimal distraction |

### Blinking

```txt
cursor_blink = true         # Animate cursor
```

Set to `false` for a solid cursor.

---

## Scrollback & History

### Lines to Keep

```txt
scrollback_history = 10000    # Lines in scrollback (default: 2000)
```

Higher values use more memory. Choose by workload:
- Default (2000): Conservative, low memory
- Moderate (10000): Comfortable for most shells
- High (50000): Long-running sessions with heavy output

### Inactive Tab Behavior

```txt
inactive_tab_scrollback = 5000    # Limit for inactive tabs
```

Saves memory by reducing history for tabs you're not viewing.

### Scroll Speed

```txt
mouse_scroll_multiplier = 3     # Lines per scroll tick
```

Increase for faster scrolling, decrease for precision.

### Scrollbar Style

```txt
scrollbar_visibility = on_scroll    # always, never, on_scroll
scrollbar_style = neutral           # neutral, rounded, etc.
```

---

## Tab Behavior

### Title Sources

```txt
tab_title_priority = manual, explicit, shell, fallback
```

Priority order:
1. **Manual**: You renamed the tab
2. **Explicit**: Program set title via OSC
3. **Shell**: Working directory or command
4. **Fallback**: Default "Terminal"

### Title Mode

```txt
tab_title_mode = smart      # smart, prompt, command, path, explicit
```

| Mode | Behavior |
|------|----------|
| `smart` | Automatically detects best source |
| `prompt` | Uses shell prompt template |
| `command` | Shows running command |
| `path` | Shows working directory |
| `explicit` | Only OSC-set titles |

### Custom Title Templates

```txt
tab_title_prompt_format = {cwd} {git_branch}
tab_title_command_format = {command}
```

Variables available:
- `{cwd}` - Current working directory
- `{command}` - Running command name
- `{git_branch}` - Git branch (if applicable)

### Tab Close Buttons

```txt
tab_close_visibility = active_hover    # always, never, active_hover
```

- `always`: Show on every tab
- `never`: Hide completely (use `Cmd/Ctrl + W`)
- `active_hover`: Show on hover for active tab

### Tab Width

```txt
tab_width_mode = active_grow_sticky
```

Controls how tabs resize when many are open.

---

## Colors & Themes

### Built-in Themes

```txt
theme = catppuccin
```

Available:
- `termy` - Default, clean
- `catppuccin` - Soft pastel
- `gruvbox` - Retro, warm
- `tokyonight` - Dark, modern
- `github` - GitHub-inspired
- `dracula` - Popular purple

### Custom Colors

Override any theme:

```txt
[colors]
foreground = #f8f8f2
background = #282a36
cursor = #f8f8f2

# ANSI colors
black = #21222c
red = #ff5555
green = #50fa7b
yellow = #f1fa8c
blue = #bd93f9
magenta = #ff79c6
cyan = #8be9fd
white = #f8f8f2

# Bright variants
bright_black = #6272a4
bright_red = #ff6e6e
bright_green = #69ff94
bright_yellow = #ffffa5
bright_blue = #d6acff
bright_magenta = #ff92df
bright_cyan = #a4ffff
bright_white = #ffffff
```

---

## Shell Integration

### Default Shell

```txt
shell = /bin/zsh
```

Termy uses your login shell by default. Override here.

### Working Directory

```txt
working_dir = ~/projects
working_dir_fallback = home    # home, process, or path
```

- `home`: Start in ~
- `process`: Use Termy's working directory
- Custom path: `/your/path`

### Environment Variables

```txt
# Passed to all shells
term = xterm-256color
colorterm = truecolor
```

Termy automatically sets:
- `TERMY=1`
- `TERMY_PID`
- `TERMY_TAB_ID`

---

## Safety & Behavior

### Quit Warnings

```txt
warn_on_quit = false                              # Always warn
warn_on_quit_with_running_process = true          # Warn if processes running
```

### Tab Protection

```txt
tab_close_on_exit = ask    # never, always, ask
```

---

## Example Configurations

### Minimal

```txt
font_family = JetBrains Mono
font_size = 14
theme = termy
```

### Developer

```txt
font_family = Fira Code
font_size = 13
theme = tokyonight
scrollback_history = 50000
tab_title_mode = command
```

### Aesthetics Focus

```txt
font_family = SF Mono
font_size = 15
theme = catppuccin
background_opacity = 0.9
background_blur = true
padding_x = 20
padding_y = 16
cursor_style = beam
```

### Performance

```txt
font_family = JetBrains Mono
font_size = 14
background_opacity = 1.0
background_blur = false
scrollback_history = 2500
inactive_tab_scrollback = 1000
```

---

## When Customization Doesn't Stick

For the checklist of why a config change isn't applying, how to recover from a broken config, and how to diagnose missing fonts, see [Troubleshooting → Config Issues](/docs/troubleshooting#config-issues) and [Troubleshooting → Font Rendering Issues](/docs/troubleshooting#font-rendering-issues).

---

## Related Guides

- [Configuration](/docs/configuration) - Full option reference
- [Keybindings](/docs/keybindings) - Customize shortcuts
- [FAQ](/docs/faq) - Common questions
