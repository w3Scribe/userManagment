/**
 * Logger middleware function to log request details
 * @file    		logger.js
 * @module			chalk to provide colors to the console
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} next
 */
import chalk from "chalk";

const colors = {
  GET: "green",
  POST: "magenta",
  PUT: "blue",
  PATCH: "yellow",
  DELETE: "red",
};

function logger(req, res, next) {
  const currentProcessTime = Date.now();
  const { method, originalUrl } = req;
  const colorName = colors[method];

  const hasCorrectPath = !(
    originalUrl.endsWith(".ico") || originalUrl.endsWith(".css")
  );

  next();
  const processTime = Date.now() - currentProcessTime;
  const status = res.statusCode;

  if (hasCorrectPath) {
    console.log(
      chalk[colorName](method) +
        chalk.dim(` ${originalUrl} ${chalk.bold(status)} ${processTime}ms`)
    );
  }
}

export default logger;
