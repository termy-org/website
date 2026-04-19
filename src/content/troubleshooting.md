---
title: Troubleshooting
description: Solutions to common problems and issues
order: 1
category: Help & Troubleshooting
---

# Troubleshooting

> For: end users

Having trouble with Termy? This guide covers common issues and their solutions.

---

## Installation Issues

### macOS: "Termy is damaged and can't be opened"

**Cause**: macOS Gatekeeper quarantine

**Solution**:

```bash
# Remove quarantine attribute
sudo xattr -d com.apple.quarantine /Applications/Termy.app

# Alternative: Allow from Security preferences
# 1. Open System Preferences → Security & Privacy
# 2. Click "Allow Anyway" next to the Termy warning
```

### macOS: "Termy cannot be opened because the developer cannot be verified"

**Quick Fix**:
1. Right-click (Control+click) Termy.app
2. Select "Open"
3. Click "Open" in the dialog

**Permanent Fix** (same as above):
```bash
sudo xattr -d com.apple.quarantine /Applications/Termy.app
```

### Windows: "Windows protected your PC" / SmartScreen

**Cause**: Windows SmartScreen blocking unsigned apps

**Solution**:
1. Click **"More info"**
2. Click **"Run anyway"**

To prevent this warning, install via a package manager when available.

### Linux: AppImage Won't Launch

**Check FUSE**:
```bash
# Test if FUSE is available
ls /dev/fuse

# Install FUSE (Ubuntu/Debian)
sudo apt install libfuse2

# Install FUSE (Fedora)
sudo dnf install fuse

# Install FUSE (Arch)
sudo pacman -S fuse2
```

**Alternative Run Method**:
```bash
./Termy-*.AppImage --appimage-extract-and-run
```

**Check Dependencies**:
```bash
# See what libraries are missing
ldd ./Termy-*.AppImage
```

---

## Runtime Issues

### "termy: command not found"

**Check Installation Location**:

```bash
# Find termy binary
which termy
find /Applications ~/.local/bin /usr/bin -name "termy" 2>/dev/null
```

**Add to PATH**:

```bash
# macOS (if not using Homebrew)
export PATH="$PATH:/Applications/Termy.app/Contents/MacOS"

# Linux (if installed to ~/.local/bin)
export PATH="$HOME/.local/bin:$PATH"
```

Add to `~/.bashrc`, `~/.zshrc`, or `~/.config/fish/config.fish` to persist.

### Termy Opens Then Immediately Closes

**Check Config**:

```bash
# Temporarily reset config
mv ~/.config/termy/config.txt ~/.config/termy/config.txt.bak

# Try launching again
termy
```

If this works, there's an error in your config. Restore and fix:

```bash
# Restore backup
mv ~/.config/termy/config.txt.bak ~/.config/termy/config.txt

# Edit and fix issues
# Common problems:
# - Invalid font name
# - Syntax errors
# - Missing values
```

**Check Logs** (if available):

```bash
# Run with debug output
RUST_LOG=debug termy 2>&1 | tee termy.log
```

### Slow Performance

**Disable Transparency**:
```txt
# In config.txt
background_opacity = 1.0
background_blur = false
```

**Reduce Scrollback**:
```txt
scrollback_history = 2500
inactive_tab_scrollback = 1000
```

**Use System Font**:
```txt
# Instead of custom fonts
font_family = monospace
```

### High CPU Usage

**Possible Causes**:
- Transparent background with blur
- Very long scrollback
- Debug logging enabled

**Fixes**:
```txt
# config.txt
background_opacity = 1.0
background_blur = false
scrollback_history = 5000
```

### Font Rendering Issues

**Missing Characters**:
- Install a Nerd Font: `brew install font-jetbrains-mono-nerd-font`
- Or disable icons in your shell prompt

**Wrong Font**:
```bash
# Check exact font name
fc-match "Your Font Name"

# List available fonts
fc-list : family | grep -i "your font"
```

**Update Font Cache** (Linux):
```bash
fc-cache -fv
```

---

## Display Issues

### Blurry Text

**macOS**:
- Check "System Preferences → Displays" scaling
- Try different font sizes (odd numbers often sharper)

**Linux (HiDPI)**:
```bash
# Set scale factor
export WINIT_X11_SCALE_FACTOR=1.5
termy
```

### Colors Look Wrong

**Check Terminal Colors**:
```bash
# Print color test
for i in {0..255}; do
    printf "\x1b[38;5;${i}mcolour${i} "
done
```

**Override Theme Colors**:
```txt
[colors]
foreground = #ffffff
background = #000000
```

### Cursor Not Visible

```txt
# config.txt
cursor_style = block
cursor_blink = false
```

Try different styles: `block`, `beam`, `underline`.

---

## Input Issues

### Keyboard Shortcuts Not Working

**Check for Conflicts**:
- macOS: System Preferences → Keyboard → Shortcuts
- Check if another app is capturing the shortcut

**Reset Keybindings**:
```txt
# config.txt
keybind = clear
```

Then add back only what you need.

### Copy/Paste Not Working

**Linux**:
```bash
# Ensure clipboard tools are installed
# Ubuntu/Debian
sudo apt install xclip

# Or xsel
sudo apt install xsel
```

**Check Keybindings**:
```txt
# Should be:
keybind = secondary-c=copy
keybind = secondary-v=paste
```

### Special Characters Not Rendering

**Check Locale**:
```bash
locale

# Set UTF-8 if needed
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
```

---

## Shell Issues

### Shell Not Starting

**Check Shell Path**:
```bash
which bash
which zsh
which fish

# Verify in config
shell = /bin/zsh
```

**Test Shell Manually**:
```bash
# Run the shell directly
/bin/zsh --login
```

### Environment Variables Missing

**Check Shell Integration**:
```bash
# In Termy
env | grep TERMY
# Should show TERMY=1

# Check if shell is login shell
shopt -q login_shell && echo "Login shell" || echo "Not login shell"
```

**Fix for macOS**:
macOS doesn't run `.bashrc` for login shells. Use `.bash_profile` or `.zprofile`:

```bash
# ~/.zprofile
source ~/.zshrc
```

---

## Config Issues

### Config Changes Not Applying

**Verify File Location**:
```bash
ls -la ~/.config/termy/config.txt
cat ~/.config/termy/config.txt
```

**Check Syntax**:
```txt
# Correct:
font_family = JetBrains Mono
font_size = 14

# Incorrect:
font_family=JetBrains Mono  # Missing spaces
font_size: 14               # Wrong separator
```

**Validate Config**:
Most errors are logged. Run from terminal to see:
```bash
termy 2>&1 | head -50
```

### Reset to Defaults

```bash
# Backup first
mv ~/.config/termy/config.txt ~/.config/termy/config.txt.backup

# Create empty config
touch ~/.config/termy/config.txt

# Or copy from examples
# (examples would be in repo)
```

---

## Update Issues

### "Failed to check for updates"

**Check Internet**:
```bash
ping github.com
```

**Check GitHub API**:
```bash
curl -I https://api.github.com/repos/lassejlv/termy/releases/latest
```

**Manual Update**:
1. Download latest from GitHub
2. Replace existing install

### Update Broke Something

**Rollback**:
```bash
# Restore previous version
# (Keep old versions before updating)

# Or reinstall
brew reinstall --cask termy
```

---

## Getting More Help

### Collect Information

Before reporting an issue, gather:

```bash
# Termy version
termy --version

# OS version
uname -a  # macOS/Linux
systeminfo | findstr /B /C:"OS"  # Windows

# Config file
cat ~/.config/termy/config.txt

# Recent logs (if any)
ls -la ~/Library/Logs/termy/  # macOS
```

### Where to Report

1. **GitHub Issues**: https://github.com/lassejlv/termy/issues
2. **Discord**: https://discord.gg/4VDBFD7vAp (faster response)
3. **Check existing issues**: Search before posting

### Include in Bug Reports

- Termy version
- Operating system and version
- What you expected vs what happened
- Steps to reproduce
- Config file (sanitized)
- Screenshots if visual issue

---

## Related

- [FAQ](/docs/faq) - Common questions
- [Installation](/docs/installation) - Install guide
