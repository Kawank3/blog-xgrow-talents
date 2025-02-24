import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Viewer } from "@bytemd/react";

import highlight from "@bytemd/plugin-highlight";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState({ content: "# Carregando..." });

  useEffect(() => {
    fetch("/api/post?id=" + params.id)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(() => setPost({ content: "# Post não encontrado" }))
  }, []);

  return (
    <main>
      {
        post.src &&
        <img
          style={{ padding: "2em 12% 0 12%", width: "100%" }}
          src={post.src}
        />
      }
      <Viewer
        value={post.content}
        plugins={[highlight()]}
      />
    </main>
  );
}

export default Post;
