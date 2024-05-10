/**
 * Entry point of the application
 * @file    		server.js
 * @module			chalk to provide colors to the console
 * @requires		app.js to start the server
 * @requires		config.js to get the PORT
 * @overview    Entry point of the application where the server is started.
 */

import browserSync from 'browser-sync'
import app from './src/app.js'
import config from './src/config/variables.js'
import chalk from 'chalk'
import { dirname } from 'node:path'

const __filename = import.meta.url
const __dirname = dirname(__filename)

// environment PORTS
const PORT = config.PORT

// start server
app.listen(PORT, () => {
	console.log(chalk.green(`The server is started http://localhost:${PORT}`))
})
