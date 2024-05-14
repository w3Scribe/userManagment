import express from 'express'
import Parse from './middlewares/parsers.js'
import errorHandler from './middlewares/errorHandler.js'
import userRoutes from './routes/userRoutes.js'
import logger from './middlewares/logger.js'
import viewEngine from './config/viewEngine.js'
import notFoundHandler from './middlewares/notFoundHandler.js'
import notFoundRouter from './routes/notFoundRoute.js'
import auth from "./middlewares/auth.js"

/**
 * This is the main app module that creates the express app and sets up the middlewares and routes
 * @file     app
 * @requires express    to create the express app
 * @requires Parse      to set up the parser middlewares
 * @requires errorHandler to handle errors
 * @requires userRouter to handle user routes
 * @requires logger   to log requests
 * @requires viewEngine to set up the view engine
 */

// express app
const app = express()

//parser middleware
Parse(app)

// view engine setup
viewEngine(app)

// logger middleware
app.use(logger)

// routes
app.use('/api/users', auth, userRoutes)
app.use(notFoundRouter)

// global error handler Middleware
app.use(notFoundHandler)
app.use(errorHandler)

export default app
