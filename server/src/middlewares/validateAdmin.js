// requires "validateToken"
export default function (req, res, next) {
  if (req.body.jwt.role != "ADMIN")
    res.status(401).send("Error: Rota de Administrador")
  else
    next()
}
