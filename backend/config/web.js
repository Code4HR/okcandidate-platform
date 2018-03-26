/**
 * Server Configuration
 * (app.config.web)
 *
 * Configure the Web Server
 *
 * @see {@link http://trailsjs.io/doc/config/web}
 */
module.exports = {

  /**
   * The port to bind the web server to
   */
  port: process.env.PORT || 8080,

  /**
   * The host to bind the web server to
   */
  host: process.env.HOST || '0.0.0.0',

  plugins: [
    {
      register: require('yar'),
      options: {
        storeBlank: false,
        cookieOptions: {
          password: process.env['OKC_SESSION_SECRET_KEY'],
          isSecure: false
        }
      }
    }
  ]

}
