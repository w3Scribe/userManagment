import { Router } from "express";
import reqValidator from "../middlewares/reqValidator.js";

const authRouter = Router();

authRouter.get("/login", reqValidator(userLoginSchema), (req, res, next) => {
  // Do something
});
