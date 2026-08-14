$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$appDir = Join-Path $scriptDir 'app'

if (-not (Test-Path $appDir)) {
    throw "App directory not found: $appDir"
}

$packageJson = Join-Path $appDir 'package.json'
if (-not (Test-Path $packageJson)) {
    throw "package.json not found in app directory: $packageJson"
}

$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCmd) {
    throw 'Node.js not found. Node.js 18 or newer is required.'
}

$npmCmd = Get-Command npm -ErrorAction SilentlyContinue
if (-not $npmCmd) {
    throw 'npm not found. npm 9 or newer is required.'
}

Push-Location $appDir
try {
    npm install
    npm run dev
}
finally {
    Pop-Location
}
