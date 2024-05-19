import { Router } from "express";

const HomeRouter = Router();

HomeRouter.get("/", (_req, res) => {
  res.status(200).render("index", { title: "Home" });
});

export default HomeRouter