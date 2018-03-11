'use strict';

const path = require('path');

const withSass = require('@zeit/next-sass');
module.exports = withSass({
  sassLoaderOptions: {
    includePaths: [
        path.join(__dirname, 'node_modules')
    ]
  }
});
