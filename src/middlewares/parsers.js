import express from 'express'
import cookieParser from 'cookie-parser'

/**
 * @param {express.Application} app
 * @returns {void}
 * @module express 
 * @module cookieParser to parse the cookies
 * @description This middleware is used to parse the incoming request body and cookies
 */

export default function bodyParser(app) {
	// parse application/x-www-form-urlencoded
	app.use(express.urlencoded({ extended: true }))
	// parse application/json and cookies
	app.use(express.json())
	app.use(cookieParser())
}
