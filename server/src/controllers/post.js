import prisma from "../prisma.js";

export const Create = async (req, res) => {
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
      omit: {
        authorId: true,
        content: true,
      }
    });

    res.status(201).json(post);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error: post não criado!");
  }
};

export const Read = async (req, res) => {
  const { id, limit, authorId } = req.query;
  const omit = JSON.parse(req.query.omit || '{}');

  try {
    if (id) {
      const post = await prisma.post.findUniqueOrThrow({ 
        where: { id },
        omit: {
          id: true,
          authorId: true,
        }
      });
      return res.status(200).json(post); 
    }

    const posts = await prisma.post.findMany({
      where: authorId ? { authorId } : undefined,
      orderBy: { createdAt: "desc" },
      take: limit ? Number(limit) :  9999,
      include: {
        author: {
          select: {
            name: true
          }
        }
      },
      omit: omit 
    })

    res.status(200).json(posts);
  } catch (err) {
    console.log(err)
    res.status(500).send("Error: não foi possível obter o(s) post(s).")
  }
}

export const Update = async (req, res) => {
  const { title, description, content, src, id, jwt } = req.body;

  try {
    await prisma.post.update({
      where: jwt.role == "ADMIN" ? { id } : { id, authorId: jwt.id },
      data: {
        title,
        description,
        content,
        src,
      },
    });

    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(400).send("Error: não foi possível editar o post.");
  }
};

export const Delete = async (req, res) => {  
  const { id, jwt } = req.body;

  try {
    await prisma.post.delete({
      where: jwt.role === "ADMIN" ? { id } : { id, authorId: jwt.id },
    });

    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(400).send("Error: não foi possível deletar o post.");
  }
};
