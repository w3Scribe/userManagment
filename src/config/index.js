import { config } from 'dotenv'

const { error, parsed: variables } = config()

if (error) {
	console.error(error.message)
	process.exit(1)
}

export default Object.freeze({
	PORT: variables.PORT?.split(',').map(Number),
	NODE_ENV: variables.NODE_ENV ?? 'development',
	MONGODB_URI: variables.MONGODB_URI
})
