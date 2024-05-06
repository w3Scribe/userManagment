import app from './src/app.js'
import config from './src/config/index.js'

console.log(color.green)

// environment PORT
const PORT = config.port

app.listen(PORT, () => {
	console.clear()
	console.log(`Server is started at http://localhost:${PORT}`)
})
