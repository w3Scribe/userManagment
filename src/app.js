import express from 'express'
import bodyParser from './middlewares/bodyParser.js'
import errorHandler from './middlewares/errorHandler.js'
import userRouter from "./routes/user.js"

// express app
const app = express()

// body parser middleware
bodyParser(app)

// routes
app.use("/api/users", userRouter)

// global error handler Middleware
app.use(errorHandler)

export default app
