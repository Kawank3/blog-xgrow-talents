import { useState } from "react";
import { Editor } from "@bytemd/react";
import { toast } from "sonner";
import highlight from "@bytemd/plugin-highlight";

const Create = (props) => {
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [disable, setDisable] = useState(false);

  const onClick = async () => {
    setDisable(true);
    try {
      if (!title)
        throw "Título Inválido"
      if (!content)
        throw "Conteúdo Inválido"
      if (!description)
        throw "Descrição Inválida"

      let res = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({ title, description, content, src }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${props.token}`
        },
      })

      if (!res.ok)
        throw "Ops... Erro ao criar o post"

      let data = await res.json();

      toast.success("Post criado com sucesso!");
    } catch (err) {
      toast.error(err);
    } finally {
      setDisable(false);
    }
  }

  return (
    <>
      <Editor
        value={content}
        onChange={v => {
          setContent(v)
        }}
        plugins={[highlight()]}
      />
      <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Título"/>
      <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Descrição"/>
      <input value={src} onChange={e => setSrc(e.target.value)} type="text" placeholder="URL da Imagem (opcional)"/>
      <button disabled={disable} onClick={onClick}>Criar</button>
    </>
  );
}

export default Create;
