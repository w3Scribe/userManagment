import app from './src/app.js'
import config from './src/config/index.js'

// environment PORTS
const PORTS = Array.isArray(config.PORT) ? config.PORT : [config.PORT]

let server



for (const port of PORTS) {
	server = app.listen(port, () => {
		console.clear()
		console.log(`Server is started at http://localhost:${port}`)
	})

	server.on('error', error => console.log(error.message))

	if (server.listening) break
}




if (!server.listening) {
	console.error(
		`Failed to start server on any of the following ports: ${PORTS.join(', ')}`
	)
	process.exit(1)
}
