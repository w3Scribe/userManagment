/**
 * @module app
 * @requires express
 * @requires bodyParser
 * @requires errorHandler
 * @requires userRouter
 * @description This is the main app module that creates the express app and sets up the middlewares and routes
 */

import express from 'express'
import Parse from './middlewares/parsers.js'
import errorHandler from './middlewares/errorHandler.js'
import userRouter from './routes/user.js'

// express app
const app = express()

//parser middleware
Parse(app)

// routes
app.use('/api/users', userRouter)

// global error handler Middleware
app.use(errorHandler)

export default app
