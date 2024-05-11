/**
 * @router api/user
 * @requires express Router
 * @requires createHttpError to create http errors
 * @description This is the user router module that handles all the user routes
 */

import { Router } from 'express'

const userRouter = Router()

userRouter.get('/', (_req, res) => {
   res.status(200).render('index', { title: 'User'})
})

userRouter.post('/', (_req, res) => {
   res.status(200).render('index', { title: 'User'})
})

userRouter.put('/', (_req, res) => {
   res.status(200).render('index', { title: 'User'})
})

userRouter.patch('/', (_req, res) => {
   res.status(200).render('index', { title: 'User'})
})

userRouter.delete('/', (_req, res) => {
   res.status(200).render('index', { title: 'User'})
})



export default userRouter  
