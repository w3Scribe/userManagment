import { Router } from 'express'

const notFoundRouter = Router()

notFoundRouter.all('*', (_req, res, _next) => {
	res.render('not-found', { title: 'Not Found' })
})

export default notFoundRouter