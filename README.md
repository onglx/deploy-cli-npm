# OnglX Deploy CLI

Deploy AI APIs to AWS in 30 seconds with 85% cost savings.

## 🚀 Quick Install

```bash
npm install -g @onglx/deploy-cli
```

## ✅ Verify Installation

```bash
onglx-deploy --version
onglx-deploy --help
```

## 📖 Quick Start

```bash
# Initialize a new project
onglx-deploy init

# Deploy your API
onglx-deploy deploy

# Check deployment status
onglx-deploy status
```

## 🌟 Features

- **⚡ 30-second deployments** - From code to production API in seconds
- **💰 85% cost savings** - Optimized AWS infrastructure 
- **🤖 AI-first** - Built for inference APIs (Anthropic, OpenAI, etc.)
- **🔒 Enterprise-ready** - VPC, IAM, logging, monitoring included
- **📊 Auto-scaling** - Handle traffic spikes automatically
- **🌍 Global CDN** - Low-latency worldwide

## 💻 Supported Platforms

| Platform | Architecture | Status |
|----------|-------------|--------|
| macOS | Intel (x64) | ✅ |
| macOS | Apple Silicon (arm64) | ✅ |
| Linux | x64 | ✅ |
| Linux | arm64 | ✅ |
| Windows | x64 | ✅ |

## 📋 Requirements

- **Node.js** >= 16 (for npm installation)
- **AWS Account** with CLI configured
- **Python 3.9+** (for inference APIs)

## 🏃 Alternative Installation Methods

### Homebrew (macOS/Linux)
```bash
brew tap onglx/deploy-cli-homebrew
brew install onglx-deploy
```

### Direct Download
Download binaries from our [releases page](https://github.com/onglx/deploy-cli-npm/releases).

## 🆘 Troubleshooting

### Platform Detection Issues
```bash
# Check your platform
node -e "console.log(process.platform, process.arch)"

# Manual installation
npm install -g @onglx/deploy-cli --force
```

### Permission Issues (macOS)
```bash
# Allow unsigned binary (one-time)
sudo xattr -rd com.apple.quarantine /usr/local/bin/onglx-deploy
```

### Windows Security Warning
If Windows Defender flags the binary:
1. This is a false positive (common with Go binaries)
2. Add an exclusion for the npm global directory
3. Report the issue to Microsoft

## 📚 Documentation

- **Documentation**: https://docs.onglx.dev
- **Examples**: https://github.com/onglx/examples
- **Support**: support@onglx.dev

## 🐛 Issues & Support

Found a bug or need help?

- **Issues**: https://github.com/onglx/deploy/issues
- **Email**: support@onglx.dev
- **Discord**: https://discord.gg/onglx

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by the OnglX team**