import { Router } from 'express'
import createHttpError from 'http-errors'

const userRouter = Router()

const userData = [
	{ id: 1, name: 'sudhir', lastname: 'gadpayle' },
	{ id: 2, name: 'samir', lastname: 'zode' },
	{ id: 3, name: 'sagar', lastname: 'gadpayle' }
]


userRouter.get('/', (_req, res, _next) => {
	res.status(202).json(userData)
})


userRouter.get('/:name', (req, res, next) => {
	const { name } = req.params

	const user = userData.filter(
		user => user.name.includes(name) || user.lastname.includes(name)
	)

	if (user) return res.status(200).json(user)
	next(createHttpError(404, 'user not found.'))
})



export default userRouter
