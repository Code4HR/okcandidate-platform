const path = require('path')

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
  port: process.env.PORT || 3000,

  /**
   * The host to bind the web server to
   */
  host: process.env.HOST || '0.0.0.0',

  plugins: [
    {
      register: require('vision'),
      options: {}
    },
    {
      register: require('inert'),
      options: {}
    },
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
  ],

  onPluginsLoaded: function(err) {

    this.packs.hapi.server.views({
      engines: {
        js: require('hapi-react-views')
      },
      relativeTo: __dirname,
      path: path.join(__dirname, '..', 'dist', 'components', 'environments'),
      compileOptions: {
        renderMethod: 'renderToString',
        layoutPath: path.join(__dirname, '..', 'dist', 'components'),
        layout: 'Layout'
      }
    })

  }

}
