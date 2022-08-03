const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["token"];

  if (!token) {
    return res.status(403).send("Autenticação Necessária");
  }
  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Token Inválido");
  }
  return next();
};

module.exports = verifyToken;