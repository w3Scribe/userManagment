/**
 * Logger middleware function to log request details
 * @file    		logger.js
 * @module			chalk to provide colors to the console
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

import chalk from 'chalk'

function logger(req, _res, next) {
	const isTrue =
		req.path.endsWith('styles.css') || req.path.endsWith('favicon.ico')

	if (!isTrue) console.log(chalk.yellow(`${req.method} ~ ${req.path}`))
	next()
}

export default logger
