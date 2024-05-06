import express from 'express'
import cookieParser from 'cookie-parser'

/**
 * @param {express.Application} app
 * @returns {void}
 * @description This middleware is used to parse the incoming request body
 */

export default function bodyParser(app) {
	app.use(express.urlencoded({ extended: true }))
	app.use(express.json())
	app.use(cookieParser())
}
