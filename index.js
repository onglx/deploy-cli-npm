#!/usr/bin/env node

// OnglX Deploy CLI - npm package entry point
// This file is mainly for programmatic access, the actual CLI is in bin/

const { execSync } = require('child_process');
const path = require('path');

function getCliPath() {
  const platform = process.platform;
  const binaryName = platform === 'win32' ? 'onglx-deploy.exe' : 'onglx-deploy';
  return path.join(__dirname, 'bin', binaryName);
}

function runCli(args = []) {
  const cliPath = getCliPath();
  const command = `"${cliPath}" ${args.join(' ')}`;
  
  try {
    return execSync(command, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
  } catch (error) {
    process.exit(error.status || 1);
  }
}

// Export for programmatic use
module.exports = {
  getCliPath,
  runCli
};

// If run directly, pass through to CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  runCli(args);
}