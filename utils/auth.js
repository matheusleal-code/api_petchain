const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (access) => {

  return (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["token"];

    if (!token) {
      return res.status(403).send("Autenticação Necessária");
    }
    try {
      const decoded = jwt.verify(token, config.SECRET);
      req.user = decoded;
      if (req.user.userType != access) {
        return res.status(404).json({ message: 'Acesso negado' })
      }else {
        return next();
      }
    } catch (err) {
      return res.status(401).send("Token Inválido");
    }
  }
};

const getUserLogged = (userToken) => {
  const decoded = jwt.verify(userToken, config.SECRET);

  return decoded;
}

module.exports = {
  verifyToken: verifyToken,
  getUserLogged: getUserLogged
};