import express from 'express'
import createHttpError from 'http-errors'
import bodyParser from './middlewares/bodyParser.js'
import errorHandler from './middlewares/errorHandler.js'
const app = express()

// body parser middleware
bodyParser(app)

const userData = [
	{ id: 1, name: 'sudhir', lastname: 'gadpayle' },
	{ id: 2, name: 'samir', lastname: 'zode' },
	{ id: 3, name: 'sagar', lastname: 'gadpayle' }
]

app.get('/', (_req, _res, next) => {
	next(createHttpError(404, 'user not found.'))
})

app.get('/api/user', (_req, res) => {
	res.status(202).json(userData)
})

app.get('/api/user/:name', (req, res, next) => {
	const { name } = req.params

	const user = userData.filter(
		user => user.name.includes(name) || user.lastname.includes(name)
	)

	if (user) return res.status(200).json(user)
	next(createHttpError(404, 'user not found.'))
})

// global error handler Middleware
app.use(errorHandler)

export default app
