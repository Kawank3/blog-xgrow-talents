import { useContext, useEffect, useState } from "react";

import { context } from "../../Context";

import Create from "./Create";
import Users from "./Users";
import Posts from "./Posts";

const Manage = () => {
  const store = useContext(context);
  const user = store.user[0];

  const [page, setPage] = useState("Criar");
  const [post, setPost] = useState();

  useEffect(() => {
    if (page != "Criar" && post)
      setPost();
  }, [page])

  useEffect(() => {
    if (post)
      setPage("Criar");
  }, [post])

  const onClick = (e) => {
    setPage(e.target.innerText);
  };

  return (
    <main className="markdown-body">
      <h1>げ Gerenciar</h1>
      <div id="manage">
        <nav>
          <ul>
            <li>
              <button onClick={onClick}>Criar</button>
            </li>
            <li>
              <button onClick={onClick}>Posts</button>
            </li>
            {
              user.role == "ADMIN" &&
              <li>
                <button onClick={onClick}>Usuários</button>
              </li>
            }
          </ul>
        </nav>
        <main>
          {page == "Criar" && <Create user={user} context={post} />}
          {page == "Posts" && <Posts user={user} context={setPost} />}
          {page == "Usuários" && <Users user={user} />}
        </main>
      </div>
    </main>
  );
};

export default Manage;
