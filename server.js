import app from './src/app.js'
import config from './src/config/index.js'

// environment PORTS
const PORTS = Array.isArray(config.PORT) || config.PORT

let server

for (const port of PORTS) {
	server = app.listen(port, () => {
		console.clear()
		console.log(`Server is started at http://localhost:${port}`)
	})

	server.on('error', error => {
		console.error(`Failed to start server on port ${port}: ${error.message}`)
	})

	if (server.listening) break
}

if (!server.listening) {
	console.error('Failed to start server on any port')
	process.exit(1)
}
