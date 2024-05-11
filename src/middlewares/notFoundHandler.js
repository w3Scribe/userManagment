function notFoundHandler(_req, res, _next) {
	res.status(404).redirect('/notFound')
}

export default notFoundHandler
