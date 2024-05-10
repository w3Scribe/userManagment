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
import { execSync } from 'node:child_process'
import { join } from 'node:path'

const __filename = import.meta.url
console.log(__filename)

// environment PORTS
const PORT = config.PORT

browserSync({		
	browser: 'default',
	port: process.env.PORT,
	listen: CURRENT_RUNNING_URL,
	files: join(__dirname, 'public', 'css', 'styles.css')
})

// start server
function server(PORT) {
	const CURRENT_RUNNING_URL = `http://localhost:${PORT}`

	app.listen(PORT, () => {
		console.log(
			chalk.green(`Server is running on PORT ${CURRENT_RUNNING_URL}`)
		)
	})

	app.on('error', err => {
		console.log(chalk.red(`Error: ${err}`))
	})

	try {
		execSync(
			`browser-sync start --proxy ${CURRENT_RUNNING_URL} --files "cs/*.csss"`
		)
	} catch (error) {
		console.error('Failed to start browser-sync:', error)
	}

}

server(PORT)
