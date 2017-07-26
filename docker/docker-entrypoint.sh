#!/bin/sh
set -e

# remove node_modules as a subdir, even if bind-mounted from host
# the correct node_modules was installed under /usr/src/node_modules
rm -rf /usr/src/app/node_modules

exec "$@"