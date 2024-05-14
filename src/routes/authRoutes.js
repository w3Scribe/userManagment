import { Router } from "express";
import reqValidator from "../middlewares/reqValidator.js";

const authRouter = Router();

authRouter.get("/login", reqValidator(userLoginSchema), (_req, _res, _next) => {
  // Do something
});
