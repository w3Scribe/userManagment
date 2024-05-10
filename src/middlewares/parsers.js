import express from 'express'
import cookieParser from 'cookie-parser'

/**
 * This middleware is used to parse the incoming request body and cookies
 * @param {express.Application} app
 * @requires express
 * @requires cookieParser to parse the cookies
 */    

export default function bodyParser(app) {
	// parse application/x-www-form-urlencoded
	app.use(express.urlencoded({ extended: true }))
	// parse application/json and cookies
	app.use(express.json())
	app.use(cookieParser())
}
