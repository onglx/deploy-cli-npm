#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

function getPlatform() {
  const platform = os.platform();
  const arch = os.arch();
  
  // Map Node.js platform/arch to our binary naming
  const platformMap = {
    'darwin': {
      'x64': 'macos-x64',
      'arm64': 'macos-arm64'
    },
    'linux': {
      'x64': 'linux-x64',
      'arm64': 'linux-arm64'
    },
    'win32': {
      'x64': 'windows-x64.exe'
    }
  };
  
  if (!platformMap[platform] || !platformMap[platform][arch]) {
    console.error(`Unsupported platform: ${platform}-${arch}`);
    console.error('Supported platforms:');
    console.error('  macOS: x64, arm64');
    console.error('  Linux: x64, arm64'); 
    console.error('  Windows: x64');
    process.exit(1);
  }
  
  return platformMap[platform][arch];
}

function installBinary() {
  const platform = getPlatform();
  const binaryName = platform.endsWith('.exe') ? 'onglx-deploy.exe' : 'onglx-deploy';
  const sourcePath = path.join(__dirname, 'bin', `onglx-deploy-${platform}`);
  const targetPath = path.join(__dirname, 'bin', binaryName);
  
  console.log(`Installing OnglX Deploy CLI for ${platform}...`);
  
  // Check if platform-specific binary exists
  if (!fs.existsSync(sourcePath)) {
    console.error(`Binary not found for platform: ${platform}`);
    console.error(`Expected: ${sourcePath}`);
    console.error('Please report this issue at: https://github.com/onglx/deploy/issues');
    process.exit(1);
  }
  
  // Copy and make executable
  try {
    fs.copyFileSync(sourcePath, targetPath);
    
    // Make executable on Unix-like systems
    if (process.platform !== 'win32') {
      fs.chmodSync(targetPath, 0o755);
    }
    
    console.log(`✅ OnglX Deploy CLI installed successfully!`);
    console.log(`\nRun 'onglx-deploy --help' to get started.`);
    console.log(`Documentation: https://docs.onglx.dev`);
    
  } catch (error) {
    console.error('Failed to install binary:', error.message);
    process.exit(1);
  }
}

// Only run if this script is executed directly
if (require.main === module) {
  installBinary();
}

module.exports = { getPlatform, installBinary };