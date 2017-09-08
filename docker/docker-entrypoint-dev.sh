#!/bin/sh
set -e

# do last minute things just for local dev
npm run gulp

exec "$@"
