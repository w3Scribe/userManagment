/**
 * Logger middleware function to log request details
 * @file    		logger.js
 * @module			chalk to provide colors to the console
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} next
 */

import chalk from 'chalk'

function logger(req, res, next) {
	const startTime = Date.now()
	const isTrue = !(
		req.path.endsWith('styles.css') || req.path.endsWith('favicon.ico')
	)

	const methodColors = {
		GET: 'green',
		POST: 'magenta',
		PUT: 'blue',
		PATCH: 'yellow',
		DELETE: 'red'
	}

	if (isTrue)
		res.on('finish', () => {
			const duration = Date.now() - startTime

			console.log(
				chalk[methodColors[req.method]](`${req.method}`) +
					chalk.dim(` ${req.path}  ${duration}ms`)
			)
		})

	return next()
}

export default logger
