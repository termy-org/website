---
title: Building from Source
description: Build Termy from source code for development or unsupported platforms
order: 2
category: Guides
---

# Building Termy from Source

> For: developers and contributors

This guide covers building Termy from source. Useful for:
- Developers contributing to Termy
- Users on unsupported platforms
- Those wanting the latest unreleased features

---

## Prerequisites

### Required

- **Rust** 1.93+ ([rustup.rs](https://rustup.rs))
- **Git** ([git-scm.com](https://git-scm.com))

### Platform-Specific

#### macOS

```bash
# Install Xcode Command Line Tools
xcode-select --install

# Or via Homebrew
brew install git
```

#### Linux

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install build-essential git pkg-config libssl-dev

# Arch Linux
sudo pacman -S base-devel git

# Fedora
sudo dnf install gcc git openssl-devel
```

#### Windows

Install:
- [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022) or full VS
- [Git for Windows](https://gitforwindows.org/)

---

## Clone the Repository

```bash
git clone https://github.com/lassejlv/termy.git
cd termy
```

### Stay Updated

```bash
git pull origin main
```

---

## Build the Project

### Standard Build

```bash
cargo build --release
```

This creates the optimized binary at:
- **macOS/Linux**: `target/release/termy`
- **Windows**: `target/release/termy.exe`

### Development Build

For faster builds during development:

```bash
cargo build
```

Binary will be in `target/debug/termy`.

### Build Time

- Clean build: 2-5 minutes
- Incremental: 10-30 seconds

---

## Run Your Build

```bash
# macOS/Linux
./target/release/termy

# Windows
.\target\release\termy.exe
```

---

## Platform-Specific Builds

### macOS Universal Binary

Build for both Intel and Apple Silicon:

```bash
# Intel (x86_64)
rustup target add x86_64-apple-darwin
CARGO_TARGET_X86_64_APPLE_DARWIN_LINKER="clang" \
  cargo build --release --target x86_64-apple-darwin

# Apple Silicon (ARM64)
rustup target add aarch64-apple-darwin
CARGO_TARGET_AARCH64_APPLE_DARWIN_LINKER="clang" \
  cargo build --release --target aarch64-apple-darwin

# Combine into universal binary
lipo -create \
  target/x86_64-apple-darwin/release/termy \
  target/aarch64-apple-darwin/release/termy \
  -o target/release/termy-universal
```

### Linux Static Binary

For maximum compatibility:

```bash
# Using musl for static linking
rustup target add x86_64-unknown-linux-musl
cargo build --release --target x86_64-unknown-linux-musl
```

### Windows Installer

Build the installer package:

```bash
# Requires WiX Toolset
cargo wix
```

---

## Development Workflow

### Run Tests

```bash
# All tests
cargo test

# Specific crate
cargo test -p termy-core

# With output
cargo test -- --nocapture
```

### Check Code

```bash
# Fast syntax/type check (no build)
cargo check

# Linting
cargo clippy

# Format code
cargo fmt
```

### Generate Documentation

```bash
# Build docs
cargo doc --no-deps

# Open in browser
cargo doc --no-deps --open
```

---

## Development Tips

### Hot Reload for UI

When working on the UI:

```bash
# Watch for changes and rebuild
cargo watch -x "build"

# Or with automatic restart
# cargo install cargo-watch
cargo watch -x "run"
```

### Debug Logging

Enable debug output:

```bash
RUST_LOG=debug ./target/release/termy
```

### Profiling

```bash
# Build with debug symbols
cargo build --release --features profile

# Run with profiler
# On macOS: Instruments
# On Linux: perf
```

---

## Common Build Issues

### "linker not found"

**Linux**:
```bash
sudo apt install build-essential
# or
sudo pacman -S base-devel
```

**macOS**:
```bash
xcode-select --install
```

### "openssl-sys" errors

```bash
# macOS
brew install openssl
export OPENSSL_DIR=/opt/homebrew/opt/openssl

# Linux
sudo apt install libssl-dev
```

### "Unable to find libclang"

```bash
# macOS
brew install llvm

# Linux
sudo apt install libclang-dev
```

### Slow Builds

Enable optimizations:

```toml
# Add to Cargo.toml profile
[profile.dev]
opt-level = 1  # Basic optimization for dev builds
```

Or use sccache:
```bash
cargo install sccache
export RUSTC_WRAPPER=sccache
```

---

## Contributing

Termy welcomes bug reports, feature requests, code, docs, and themes. The GitHub repository is the single source for all contribution guidelines — this section covers the conventions most worth knowing up front.

### Before Submitting

1. **Format code**: `cargo fmt`
2. **Run lints**: `cargo clippy -- -D warnings`
3. **Run tests**: `cargo test`
4. **Check build**: `cargo build --release`

### Branch Naming

- `feat/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation
- `refactor/description` - Code refactoring

### Commit Messages

```
feat: Add tab search functionality
fix: Correct cursor position after resize
docs: Update installation guide
```

### Submitting a Theme

Themes are a `[colors]` block in `config.txt` format. To contribute one, open a pull request adding it under the built-in themes:

```txt
[colors]
background = #1e1e2e
foreground = #cdd6f4
blue = #89b4fa
# ...full palette
```

---

## Packaging

### Create Release Package

```bash
# macOS
mkdir -p Termy.app/Contents/MacOS
cp target/release/termy Termy.app/Contents/MacOS/
codesign --force --deep --sign - Termy.app

# Linux (tarball)
tar -czf termy-linux-x64.tar.gz -C target/release termy

# Windows (zip)
7z a termy-windows-x64.zip .\target\release\termy.exe
```

---

## Resources

- **Repository**: https://github.com/lassejlv/termy
- **Issues**: https://github.com/lassejlv/termy/issues
- **Discussions**: https://github.com/lassejlv/termy/discussions

---

## Architecture Notes

This section captures ownership boundaries for command and keybind behavior — useful when adding a new command, a new keybind directive, or a new UI adapter.

### Ownership

- `termy_command_core` owns:
  - Command IDs and config-facing command names.
  - Command config-name parsing and normalization.
  - Keybind defaults.
  - Keybind directive parsing (`clear`, bind, unbind).
  - Deterministic keybind resolution order.
- App/CLI adapters own:
  - UI labels, keywords, and command-palette presentation.
  - Platform-specific visibility policy for palette entries.
  - UI trigger canonicalization and validation (for example GPUI keystroke parsing).

### Dependency Rule

- `termy_command_core` must remain a pure domain crate.
- `termy_command_core` must not depend on:
  - `termy_config_core`
  - `gpui`
  - other UI or presentation crates

### Integration Pattern

- Adapters convert parsed config keybind lines into `termy_command_core::KeybindLineRef`.
- Adapters call `parse_keybind_directives_from_iter`; trigger canonicalization happens in `termy_command_core`.
- Adapters call `resolve_keybinds` over `default_resolved_keybinds`.

This keeps one canonical command/keybind engine while preserving thin, readable adapter code.

---

## Next Steps

- Skim the [Architecture Notes](#architecture-notes) above to understand the command/keybind boundary.
- Check [Contributing Guidelines](https://github.com/lassejlv/termy/blob/main/CONTRIBUTING.md)
- Join the [Discord](https://discord.gg/4VDBFD7vAp) for help
