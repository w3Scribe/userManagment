/**
 * @description This is the notFoundHandler middleware that handles all the 404 errors
 * @param {Express.Request} _req
 * @param {Express.Response} res
 * @param {Express.NextFunction} _next
 */

function notFoundHandler(_req, res, _next) {
	res.status(404).redirect('/notFound')
}

export default notFoundHandler
