import prisma from "../prisma.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .send("Erro ao carregar os posts, tente novamente mais tarde!");
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const posts = await prisma.post.findUnique({
      where: { id },
    });

    if (!posts) {
      return res.status(400).json({ message: "Post não encontrado" });
    }

    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .send("Erro ao carregar os post, tente novamente mais tarde!");
  }
};

export const create = async (req, res) => {
  const { title, description, content, src, jwt } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        description,
        content,
        src,
        authorId: jwt.id,
      },
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(400).end();
  }
};

export const update = async (req, res) => {
  const { title, description, content, src, id, jwt } = req.body;

  try {
    const updatePost = await prisma.post.update({
      where: jwt.role == "ADMIN" ? { id } : { id, authorId: jwt.id },
      data: {
        title,
        description,
        content,
        src,
      },
    });

    res.status(200).json(updatePost);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(
        "Não é possivel fazer alterações no momento, tente novamente mais tarde!"
      );
  }
};
