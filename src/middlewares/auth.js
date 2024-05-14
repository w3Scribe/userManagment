async function auth(req, res, next) {
  const authinfo = req.headers.authorization;
  if (!authinfo) return res.redirect("/auth/singup");
  next();
}

export default auth;
