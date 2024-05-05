/**
 * @param {Error} err
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {void}
 * @description error handler middleware function to handle errors
 */
  
import config from '../config/index.js'

function errorHandler(err, _req, res, _next) {
	const erroStatusCode = err.statusCode
	const errorMessage = err.message
	const errorStack = config.env === 'development' ? err.stack : null

	res.status(erroStatusCode).json({
		message: errorMessage,
		stack: errorStack
	})
}

export default errorHandler
