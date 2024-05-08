import express from 'express'
import Parse from './middlewares/parsers.js'
import errorHandler from './middlewares/errorHandler.js'
import userRouter from './routes/user.js'
import logger from './middlewares/logger.js'
import viewEngine from './config/viewEngine.js'

/**
 * This is the main app module that creates the express app and sets up the middlewares and routes
 * @module app
 * @requires express 
 * @requires Parse
 * @requires errorHandler
 * @requires userRouter
 * @requires logger
 * @requires viewEngine
 */

// express app
const app = express()

// logger middleware
app.use(logger)

//parser middleware
Parse(app)

// routes
app.use('/api/users', userRouter)

// view engine setup
viewEngine(app)

// global error handler Middleware
app.use(errorHandler)

export default app
