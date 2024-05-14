/**
 * @router api/user
 * @requires express Router
 * @requires createHttpError to create http errors
 * @description This is the user router module that handles all the user routes
 */

import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (_req, res) => {
  res.send("Welcome to the user route");
});

export default userRouter;
