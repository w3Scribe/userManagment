/**
 * @router api/user
 * @requires express Router
 * @requires createHttpError to create http errors
 * @description This is the user router module that handles all the user routes
 */

import { Router } from 'express'

const userRouter = Router()

userRouter.get('/', (_req, res) => {
	res.status(202)
		.cookie('userName', 'sudhir gadpayle', { maxAge: 1_000 * 10 })
		.json({ msg: 'cookie set Successfully.' })
})

userRouter.post('/', (req, res) => {
	const { userName } = req.cookies
    console.log(req.headers)
	if (userName) return res.status(200).json({ msg: `Hello ${userName}` })
	res.status(404).json({ msg: 'No cookie found' })
})

export default userRouter  
