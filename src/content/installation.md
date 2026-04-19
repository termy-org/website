---
title: Installation
description: Complete guide to installing Termy on macOS, Windows, or Linux
order: 0
category: Getting Started
---

# Installation Guide

> For: end users

This comprehensive guide will take you from download to your first terminal prompt. Choose your platform below and follow the step-by-step instructions.

## Quick Start

The fastest way to get Termy running:

- **macOS**: `brew install --cask termy-org/termy/termy`
- **Arch Linux**: `paru -S termy-bin`
- **Other**: Download from [GitHub Releases](https://github.com/lassejlv/termy/releases)

---

## macOS Installation

### Option 1: Homebrew (Recommended)

Homebrew is the easiest and most maintainable way to install Termy on macOS.

**Step 1**: Add the Termy tap
```bash
brew tap termy-org/termy
```

**Step 2**: Install Termy
```bash
brew install --cask termy
```

Or combine both steps:
```bash
brew install --cask termy-org/termy/termy
```

**Step 3**: Launch Termy
- Open from Applications, or
- Press `Cmd+Space`, type "Termy", press Enter

### Option 2: Manual DMG Install

**Step 1**: Download the latest `.dmg` file from [GitHub Releases](https://github.com/lassejlv/termy/releases)

**Step 2**: Open the DMG
- Double-click the downloaded `.dmg` file
- A Finder window opens showing Termy.app

**Step 3**: Move to Applications
- Drag `Termy.app` into your `Applications` folder
- Or copy: `cp -R Termy.app /Applications/`

**Step 4**: First Launch (Security)

Because Termy is not code-signed yet, macOS Gatekeeper may block it:

```bash
# Remove quarantine attribute
sudo xattr -d com.apple.quarantine /Applications/Termy.app
```

Then launch Termy from Applications.

### Upgrading on macOS

With Homebrew:
```bash
brew upgrade --cask termy
```

Manual install: Download the latest DMG and replace the app.

---

## Windows Installation

### Standard Install (Setup.exe)

**Step 1**: Download `Termy-Setup.exe` from [GitHub Releases](https://github.com/lassejlv/termy/releases)

**Step 2**: Run the installer
- Double-click the downloaded file
- Follow the installation wizard
- Default install location: `%LOCALAPPDATA%\Programs\Termy`

**Step 3**: First Launch (SmartScreen)

Windows SmartScreen may display a security warning because Termy is not code-signed:

1. Click **"More info"**
2. Click **"Run anyway"**

**Step 4**: Launch Termy
- From Start Menu: Press Windows key, type "Termy"
- Or from Desktop shortcut if created during install

---

## Linux Installation

### Option 1: AppImage (Universal)

The AppImage works on most Linux distributions without installation.

**Step 1**: Download the `.AppImage` file

**Step 2**: Make it executable
```bash
chmod +x Termy-*.AppImage
```

**Step 3**: Run
```bash
./Termy-*.AppImage
```

**Optional**: Move to a permanent location
```bash
mkdir -p ~/.local/bin
mv Termy-*.AppImage ~/.local/bin/termy
chmod +x ~/.local/bin/termy
```

Then ensure `~/.local/bin` is in your PATH:
```bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$HOME/.local/bin:$PATH"
```

### Option 2: Tarball (Manual Install)

**Step 1**: Download the `.tar.gz` file

**Step 2**: Extract
```bash
tar -xzf Termy-*.tar.gz
```

**Step 3**: Install using the provided script
```bash
cd termy
./install.sh
```

This installs Termy to `~/.local/bin` by default.

**Step 4**: Verify PATH
```bash
which termy
# Should output: /home/username/.local/bin/termy
```

If not found, add to PATH:
```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Option 3: Arch Linux (AUR)

For Arch Linux and derivatives (Manjaro, EndeavourOS):

```bash
# Using paru (recommended)
paru -S termy-bin

# Or using yay
yay -S termy-bin
```

The package installs Termy to `/usr/bin/termy`.

### Option 4: Build from Source

For developers or users on unsupported distros:

```bash
# Clone the repository
git clone https://github.com/lassejlv/termy.git
cd termy

# Build with Rust
cargo build --release

# The binary will be at target/release/termy
```

See [Building from Source](/docs/building-from-source) for detailed instructions.

---

## Verify Your Installation

After installation, verify Termy is properly installed:

```bash
termy --version
```

Expected output:
```
termy 0.x.x
```

If you get "command not found":
1. Check that the install directory is in your PATH
2. Restart your terminal
3. Try the full path to the binary

---

## Post-Installation

### 1. Set Up Your Shell

Termy works with any shell. The default is your system's default shell.

To change the shell:

```bash
# Edit config
termy --config

# Or manually edit ~/.config/termy/config.txt
```

Add:
```
shell = /bin/zsh
```

### 2. Install a Nerd Font (Optional)

For the best experience with icons and glyphs:

```bash
# macOS with Homebrew
brew tap homebrew/cask-fonts
brew install --cask font-jetbrains-mono-nerd-font

# Then set in config
font_family = JetBrainsMono Nerd Font
```

### 3. Create Your First Config

```bash
mkdir -p ~/.config/termy
cat > ~/.config/termy/config.txt << 'EOF'
font_family = JetBrains Mono
font_size = 14
theme = termy
background_opacity = 0.95
EOF
```

---

## Trouble Installing?

If Termy fails to launch, gets blocked by Gatekeeper or SmartScreen, or isn't on your `PATH`, see [Troubleshooting → Installation Issues](/docs/troubleshooting#installation-issues) and [Troubleshooting → Runtime Issues](/docs/troubleshooting#runtime-issues) for platform-specific fixes.

---

## Next Steps

- [First Steps](/docs/first-steps) - Learn the basics
- [Configuration](/docs/configuration) - Customize your setup
- [Keybindings](/docs/keybindings) - Master the shortcuts
