/**
 * @router api/user
 * @requires express Router
 * @requires createHttpError to create http errors
 * @description This is the user router module that handles all the user routes
 */

import { Router } from 'express'
import createHttpError from 'http-errors'
import UserSchema from '../schemas/User.js'
import reqValidator from '../middlewares/reqValidator.js'

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

userRouter.put('/:id', reqValidator(UserSchema), (req, res, next) => {
	const IdParam = parseInt(req.params.id)

	if (IdParam !== req.body.id)
		return next(createHttpError(400, 'User ID does not match.'))

	const newUpdatedUserData = {
		id: IdParam,
		...req.body
	}

	res.status(200).json(newUpdatedUserData)
})

export default userRouter
