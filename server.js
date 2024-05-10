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
import { dirname, join } from 'node:path'

const __filename = import.meta.url
const __dirname = dirname(__filename)

// environment PORTS
const PORT = config.PORT

// start server
function server(PORT) {
	app.listen(PORT, () => {
		console.log(chalk.green(`The server is started http://localhost:${PORT}`))
	})

	app.on('error', err => {
		console.log(chalk.red(`Error: ${err}`))
	})

	browserSync({
		browser: 'default',
		open: 'local',
		host: 'localhost',
		port: process.env.PORT,
		files: join(__dirname, 'public', 'css', 'styles.css')
	}).init(() => {
		console.log(chalk.green('Browser-sync is running!'))
	})
}

server(PORT)
