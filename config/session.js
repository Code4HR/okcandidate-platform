/**
 * Session Configuration
 * (app.config.session)
 *
 * @see http://trailsjs.io/doc/config/session.js
 */

'use strict'

module.exports = {

  /**
   * Define the session implementation, e.g. 'jwt' or 'cookie'
   */
  strategy: 'cookie',

  /**
   * Define cookie-specific options
   */
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }

}
