/**
 * Database Configuration
 * (app.config.database)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://trailsjs.io/doc/config/database}
 */

const dbName = process.env.OKC_DB_NAME || 'okcandidate_dev'
const dbUser = process.env.OKC_DB_USER || 'blaine'
const dbPass = process.env.OKC_DB_PASS || ''
const dbHost = process.env.OKC_DB_HOST || 'localhost'

module.exports = {

  /**
   * Define the database stores. A store is typically a single database.
   *
   * Use the SQLite3 by default for development purposes.
   *
   * Set production connection info in config/env/production.js
   */

  stores: {

    postgres: {
      dialect: 'postgres',
      database: dbName,
      host: dbHost,
      username: dbUser,
      password: dbPass,
      port: 5432,
      ssl: false,
      migrate: 'alter'
    }

  },

  models: {
    defaultStore: 'postgres',
    migrate: 'alter'
  }

}
