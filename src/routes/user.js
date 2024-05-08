/**
 * @router api/user
 * @requires express Router
 * @requires createHttpError to create http errors
 * @description This is the user router module that handles all the user routes
 */

import { Router } from 'express'
// import createHttpError from 'http-errors'
// import UserSchema from '../schemas/User.js'
// import reqValidator from '../middlewares/reqValidator.js'

const userRouter = Router()

userRouter.get('/', (_req, res) => {
    res.render('index', { title: 'User Page' })
})
export default userRouter
