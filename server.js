/**
 * Entry point of the application
 * @file    		server.js
 * @module			chalk to provide colors to the console
 * @requires		app.js to start the server
 * @requires		config.js to get the PORT
 * @overview    Entry point of the application where the server is started.
 */

import app from './src/app.js'
import config from './src/config/variables.js'
import chalk from 'chalk'
import connect from './src/config/database.js'

// environment PORTS
const PORT = config.PORT

// start server
app.listen(PORT, async () => {
	await connect();
	console.log(chalk.green(`The server is started http://localhost:${PORT}`))
})

app.on('error', err => {
	console.log(chalk.red(`Error: ${err}`))
	process.exit(1)
})
