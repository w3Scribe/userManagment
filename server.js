/**
 * Entry point of the application
 * @file    		server.js
 * @module			chalk to provide colors to the console
 * @requires		app.js to start the server
 * @requires		config.js to get the PORT
 * @overview    Entry point of the application where the server is started.
 */

import app from './src/app.js'
import config from './src/config/index.js'
import chalk from 'chalk'

// environment PORTS
const PORT = config.PORT

// start server
app.listen(PORT, () => {  
	console.clear()
	console.log(
		chalk.green(`Server is running on port http://localhost:${PORT}`)
	)
})

// error handling
app.on('error', error => {
	console.error(chalk.red(`Error: ${error}`))
	process.exit(1)
})
