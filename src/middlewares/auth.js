async function auth(req, res, next) {
  const authinfo = req.headers.authorization;
  if (!authinfo) return res.redirect("/auth/login");
  next();
}

export default auth;
