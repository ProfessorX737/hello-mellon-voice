#!/bin/bash

# ===========================================
# Mellon Landing Page Deploy Script
# ===========================================
# Builds and deploys the Astro site to Cloudflare Pages.
#
# Usage: ./scripts/deploy.sh
#
# Prerequisites:
#   - Node.js + npm installed
#   - Cloudflare credentials in macOS Keychain:
#     - cloudflare-mellon-deploy-token
#     - cloudflare-account-id
# ===========================================

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log()  { echo -e "${BLUE}==>${NC} $1"; }
ok()   { echo -e "${GREEN}✓${NC} $1"; }
err()  { echo -e "${RED}✗${NC} $1" >&2; exit 1; }

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_NAME="mellon-voice"

# --- Load credentials from Keychain ---
log "Loading credentials from Keychain..."

CF_TOKEN=$(security find-generic-password -s "cloudflare-mellon-deploy-token" -w 2>/dev/null) \
    || err "Cloudflare API token not found in Keychain. Run: security add-generic-password -a cloudflare -s cloudflare-mellon-deploy-token -w YOUR_TOKEN"

CF_ACCOUNT_ID=$(security find-generic-password -s "cloudflare-account-id" -w 2>/dev/null) \
    || err "Cloudflare Account ID not found in Keychain. Run: security add-generic-password -a cloudflare -s cloudflare-account-id -w YOUR_ACCOUNT_ID"

ok "Credentials loaded"

# --- Preflight ---
log "Preflight checks..."
command -v node >/dev/null || err "node not found"
command -v npm >/dev/null || err "npm not found"
command -v npx >/dev/null || err "npx not found"
ok "All tools available"

# --- Install dependencies ---
log "Installing dependencies..."
cd "$PROJECT_ROOT"
npm install --silent 2>&1 | tail -1
ok "Dependencies installed"

# --- Build ---
log "Building Astro site..."
npm run build 2>&1 | tail -5
[[ -d "$PROJECT_ROOT/dist" ]] || err "Build failed — dist/ directory not found"
ok "Site built ($(du -sh dist | awk '{print $1}'))"

# --- Deploy ---
log "Deploying to Cloudflare Pages..."

CLOUDFLARE_API_TOKEN="$CF_TOKEN" \
CLOUDFLARE_ACCOUNT_ID="$CF_ACCOUNT_ID" \
npx wrangler pages deploy dist \
    --project-name="$PROJECT_NAME" \
    --commit-dirty=true \
    2>&1 | tail -10

ok "Deployed to Cloudflare Pages"

# --- Done ---
echo ""
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}  Deploy complete!                       ${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
echo "  Site: https://voice.mellon.chat"
echo "  Pages: https://$PROJECT_NAME.pages.dev"
echo ""
