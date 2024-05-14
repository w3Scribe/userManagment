import { Router } from "express";
import validator from "../middlewares/validator.js";
import loginSchema from "../schemas/loginSchema.js";

const authRouter = Router();

authRouter.get("/login", (_req, res, _next) => {
  res.render("login", { title: "Login" });
});

authRouter.post("/login", validator(loginSchema), (req, res) => {
  res.json({ message: "Login successful", data: req.body });
})

export default authRouter;
