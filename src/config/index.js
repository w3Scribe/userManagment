/**
 * This file contains the configuration for the application.
 * It exports an object with the following properties:
 * - PORT: The port on which the server will run.
 * - NODE_ENV: The environment in which the application is running.
 * - MONGODB_URI: The URI of the MongoDB database.
 * The values of these properties are read from environment variables.
 */

export default Object.freeze({
	PORT: parseInt(process.env.PORT) || 5000,
	NODE_ENV: process.env.NODE_ENV ?? 'development',
	MONGODB_URI: process.env.MONGODB_URI
})
