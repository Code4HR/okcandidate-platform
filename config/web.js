/**
 * Server Configuration
 * (app.config.web)
 *
 * Configure the Web Server
 *
 * @see {@link http://trailsjs.io/doc/config/web}
 */

const Path = require('path')

module.exports = {

  /**
  * The port to bind the web server to
  */
  port: process.env.PORT || 3000,

  plugins: [
    {
      register: require('vision'),
      options: { }
    },
    {
      register: require('inert'),
      options: { }
    }
  ],

  onPluginsLoaded: function (err) {

    this.packs.hapi.server.views({
      engines: {
        js: require('hapi-react-views')
      },
      relativeTo: __dirname,
      path: Path.join(__dirname, '..', 'dist', 'components', 'environments'),
      compileOptions: {
        renderMethod: 'renderToString',
        layoutPath: Path.join(__dirname, '..', 'dist', 'components'),
        layout: 'layout'
      }
    })

  }

}
