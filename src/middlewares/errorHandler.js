import config from "../config/variables.js";

/**
 * This is Error handler middleware function to handle errors in the application
 * @param {Error} err
 * @param {express.Response} res
 */

function errorHandler(err, _req, res, _next) {
  const erroStatusCode = err.statusCode || 500;
  const errorMessage = err.message;
  const errorStack = config.env === "development" ? err.stack : null;

  if (config.NODE_ENV === "development")
    res.status(erroStatusCode).json({
      message: errorMessage,
      stack: errorStack,
    });
}

export default errorHandler;
