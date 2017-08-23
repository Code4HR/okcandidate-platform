'use strict';

/* eslint-disable no-process-env */

module.exports = function isoUrl(url) {
    if (!process.browser) {
        return `http://localhost:${process.env.PORT}${url}`;
    }
    return url;
};
