import app from './src/app.js'
import config from './src/config/index.js'

// environment PORTS
const PORT = config.PORT

// start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

// error handling
app.on('error', error => {
	console.error('Server error:', error)
	process.exit(1)
})
