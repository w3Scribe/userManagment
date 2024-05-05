import express from 'express'

/**
 * @param {express.Application} app
 * @returns {void}
 * @description This middleware is used to parse the incoming request body
 */

export default function bodyParser(app) {
	app.use(express.urlencoded({ extended: true }))
	app.use(express.json())
}
