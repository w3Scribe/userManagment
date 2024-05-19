/**
 * Configuration variables for the application.
 * @typedef {Object} ConfigVariables
 * @property {number} PORT - The port number for the server. Defaults to 5000 if not provided.
 * @property {string} NODE_ENV - The environment mode for the application. Defaults to "development" if not provided.
 * @property {string} MONGODB_URI - The MongoDB connection URI.
 * @property {string} JWT_SECRET_KEY - The secret key used for JWT authentication.
 * @property {string} JWT_EXPIRES_IN - The expiration time for JWT tokens.
 */

/**
 * Application configuration variables.
 * @type {ConfigVariables}
 */

export default Object.freeze({
  PORT: parseInt(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
});
