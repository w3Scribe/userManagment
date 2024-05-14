async function auth(req, _res, next) {
  const authinfo = req.headers.authorization;
  console.log(authinfo);
  next();
}

export default auth;
