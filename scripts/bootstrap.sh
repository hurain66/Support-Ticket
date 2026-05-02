#!/usr/bin/env bash
set -euo pipefail

REGISTRY_URL="${NPM_REGISTRY_URL:-}"
AUTH_TOKEN="${NPM_TOKEN:-}"

if [[ -n "$REGISTRY_URL" ]]; then
  echo "Using custom npm registry: $REGISTRY_URL"
  npm config set registry "$REGISTRY_URL"
fi

if [[ -n "$AUTH_TOKEN" ]]; then
  HOST="$(npm config get registry | sed -E 's#^https?://##' | sed 's#/*$##')"
  echo "Configuring auth token for registry host: $HOST"
  npm config set "//$HOST/:_authToken" "$AUTH_TOKEN"
fi

echo "Checking registry access..."
npm ping

echo "Installing dependencies..."
npm install
