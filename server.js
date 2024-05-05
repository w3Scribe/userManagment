import app from './src/app.js'
import config from './src/config/index.js'

// environment PORT
const PORT = config.port

app.listen(PORT, () => {
	console.clear()
	console.log(`Server is started at http://localhost:${PORT}`)
})
