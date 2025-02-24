import prisma from "../prisma.js"

export const Read = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Error: não foi possível obter usuários.");
  }
}

export const Update = async (req, res) => {
  const { id, role } = req.body;

  try {
    await prisma.user.update({
      where: { id },
      data: { role }
    });

    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(500).send("Error: não foi possível atualizar o usuário.");
  }
}

export const Delete = async (req, res) => {
  const id = req.body.id

  try {
    await prisma.user.delete({
      where: { id }
    });

    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(500).send("Error: não foi possível deletar o usuário");
  }
}
