#!/usr/bin/env bash
# fetch-stitch.sh — reliably downloads Stitch assets that require redirect handling
# Usage: bash scripts/fetch-stitch.sh "<url>" "<output_path>"
set -euo pipefail
URL="$1"
OUT="$2"
mkdir -p "$(dirname "$OUT")"
curl -fsSL --location --retry 3 --retry-delay 2 -o "$OUT" "$URL"
echo "✓ Saved to $OUT"
