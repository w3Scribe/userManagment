/**
 * Logger middleware function to log request details
 * @file    		logger.js
 * @module			chalk to provide colors to the console
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} next
 */

import chalk from 'chalk'

function logger(req, _res, next) {
	// This condition is used to avoid logging the request for the css file according to my project files structure
	const isTrue =
		req.path.endsWith('styles.css') || req.path.endsWith('favicon.ico')

	if (!isTrue) console.log(chalk.yellow(`${req.method} ~ ${req.path}`))

	next()
}

export default logger
