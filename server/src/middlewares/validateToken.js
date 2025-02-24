import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.get("Authorization");

  try {
    const decoded = jwt.verify(token.replace("Bearer ",""), process.env.JWT_SECRET_USER);
    req.body.jwt = decoded;
    next();
  } catch (err) {
    res.status(401).send("Token Inválido!");
  }
}
