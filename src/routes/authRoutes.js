import { Router } from "express";
// import reqValidator from "../middlewares/reqValidator.js";

const authRouter = Router();

authRouter.get("/login", (_req, res, _next) => {
  res.send("auth route login");
});

export default authRouter;
