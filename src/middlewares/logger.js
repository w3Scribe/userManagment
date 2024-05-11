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

	const colors = {
		GET: 'green',
		POST: 'magenta',
		PUT: 'blue',
		PATCH: 'yellow',
		DELETE: 'red'
	}

	const { method, originalUrl } = req
	const color = colors[method]

	const isTrue = !(
		originalUrl.endsWith('styles.css') || originalUrl.endsWith('favicon.ico')
	)

	res.on('finish', () => {
		const duration = Date.now() - startTime
		const { statusCode } = res

		if (isTrue && statusCode !== 404) {
			console.log(
				chalk[color](`${method}`) +
					chalk.dim(` ${originalUrl}  ${duration}ms`)
			)
		}

		if (isTrue && statusCode === 404) {
			console.log(chalk.red(`${method} ${originalUrl}`))
		}
	})

	return next()
}

export default logger
