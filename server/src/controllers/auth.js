import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import prisma from "../prisma.js";

export const signUp = async (req, res) => {
  const { email, name } = req.body;

  try {
    if (!name)
      throw new Error("Nome Inválido");
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/))
      throw new Error("E-mail Inválido")
    if (req.body.password.length < 8)
      throw new Error("Senha Inválida, mínimo 8 caracteres.")

    const password = await bcrypt.hash(req.body.password, 10);
    await prisma.user.create({
      data: {
        name,
        email,
        password,
        role: "USER",
      },
    });

    res.status(201).end();
  } catch (err) {
    console.log(err);
    res.status(400).end(err.message);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        role: true,
        password: true,
      },
    });

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      throw "Invalid password!";
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET_USER,
      { expiresIn: "2h" }
    );

    res.status(200).send(token);
  } catch (err) {
    res.status(401).send("E-mail ou Senha Inválido!");
  }
};
