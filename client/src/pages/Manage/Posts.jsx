import { useEffect, useState } from "react";
import { toast } from "sonner";

const Posts = ({ user, context }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`/api/post?${user.role == "USER" ? `authorId=${user.id}&` : ""}omit={"authorId":true}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, []);

  const onClick = async (id) => {
    try {
      let res = await fetch("/api/post", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        },
      });

      if (!res.ok)
        throw "";

      setPosts(posts => posts.filter(post => post.id != id));
      toast.success("Post deletado com sucesso!");
    } catch (err) {
      console.log(err);
      toast.error("Ops... Erro ao deletar post!");
    }
  }

  return <>
    {
      !posts &&
      <h3>Carregando...</h3>
    }
    {
      posts &&
      posts.map((post, i) =>
      <div className="manage-item" key={i}>
        <h4 style={{ margin: 0 }}>{post.title}</h4>
        <div>
          <button onClick={() => context(post)}>Editar</button>
          <button onClick={() => onClick(post.id)} style={{ background: "#ff374f" }}>Deletar</button>
        </div>   
      </div>
      )
    }
  </>;
};

export default Posts;
