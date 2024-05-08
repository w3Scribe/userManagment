/**
 * This is the view engine configuration module
 * @file viewEngine
 * @requires express     to set the the static files and view engine
 * @requires node:path   to get the path of the file
 * @requires node:url    to get the file URL
 * @requires express-ejs-layouts to set the layout for the views
 */

import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default function (app) {
	app.use(express.static('public'))
	app.set('view engine', 'ejs')
	app.use(expressEjsLayouts)
	app.set('views', join(__dirname, '../views/pages'))
	app.set('layout', join(__dirname, '../views/layouts/layout.ejs'))
}
