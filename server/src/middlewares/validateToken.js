import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.body.token;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_USER);
    req.body.jwt = decoded;
    next();
  } catch (err) {
    res.status(400).send("Token Inválido!");
  }
}
