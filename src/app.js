import express from 'express'
import Parse from './middlewares/parsers.js'
import errorHandler from './middlewares/errorHandler.js'
import userRouter from './routes/user.js'

/**
 * This is the main app module that creates the express app and sets up the middlewares and routes
 * @module app
 * @requires express
 * @requires Parse
 * @requires errorHandler
 * @requires userRouter
 */

// express app
const app = express()

//parser middleware
Parse(app)

// routes
app.use('/api/users', userRouter)

// global error handler Middleware
app.use(errorHandler)

export default app
