/**
 * @route 			All /notFound
 * @description This route handles all 404 errors
 * @file     		notFound.js
 * @module   		Express     to create the router
 */

import { Router } from 'express'

const notFoundRouter = Router()

notFoundRouter.all('/notFound', (_req, res, _next) => {
	res.status(404).render('not-found', { title: '404 Not Found' })
})

export default notFoundRouter
