async function auth(req, res, next) {
  const authinfo = req.headers.authorization.split(" ")[1];
  if (!authinfo) return res.redirect("/auth/signup");
  next();
}

export default auth;
