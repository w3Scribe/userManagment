import { Router } from "express";
import validator from "../middlewares/validator.js";
import loginSchema from "../schemas/loginSchema.js";
import loginController from "../controllers/loginUser.js";
import userSingUp from "../controllers/userSingUp.js";
import userSingUpSchema from "../schemas/userSingUpSchema.js";

const authRouter = Router();

authRouter.get("/signup", (_req, res, _next) => {
  res.render("signup", { title: "Sign Up" });
});

authRouter.post("/singup", validator(userSingUpSchema), userSingUp);

authRouter.get("/login", (_req, res, _next) => {
  res.render("login", { title: "Login" });
})

authRouter.post("/login", validator(loginSchema), loginController);

export default authRouter;
