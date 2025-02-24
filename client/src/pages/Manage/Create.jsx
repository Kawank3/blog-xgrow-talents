import { useState } from "react";
import { Editor } from "@bytemd/react";
import { toast } from "sonner";
import highlight from "@bytemd/plugin-highlight";

const Create = ({ user, context }) => {
  const [post, setPost] = useState(context || { content: "" });  
  const [disable, setDisable] = useState(false);

  const onClick = async () => {
    setDisable(true);
    try {
      if (!post.title)
        throw "Título Inválido"
      if (!post.content)
        throw "Conteúdo Inválido"
      if (!post.description)
        throw "Descrição Inválida"

      let res = await fetch("/api/post", {
        method: post.id ? "PUT" : "POST",
        body: JSON.stringify({
          id: post.id ? post.id : undefined,
          src: post.src,
          title: post.title,
          content: post.content,
          description: post.description,
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        },
      });

      if (!res.ok)
        throw `Ops... Erro ao ${post.id ? "editar" : "criar"} o post!`;

      toast.success(`Post ${post.id ? "editado" : "criado"} com sucesso!`);
      setPost({ src: "", title: "", content: "", description: "" });
    } catch (err) {
      toast.error(err);
    } finally {
      setDisable(false);
    }
  }

  return (
    <>
      <Editor
        value={post.content}
        onChange={v => {
          setPost({ ...post, content: v })
        }}
        plugins={[highlight()]}
      />
      <input value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="Título"/>
      <input value={post.description} onChange={e => setPost({ ...post, description: e.target.value })} type="text" placeholder="Descrição"/>
      <input value={post.src} onChange={e => setPost({ ...post, src: e.target.value })} type="text" placeholder="URL da Imagem (opcional)"/>
      <button disabled={disable} onClick={onClick}>{post.id ? "Editar" : "Criar"}</button>
    </>
  );
}

export default Create;
