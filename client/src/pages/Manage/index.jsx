import { useContext, useState } from "react";

import { context } from "../../Context";

import Create from "./Create";

const Manage = () => {
  const store = useContext(context);
  const token = store.token[0];

  const [page, setPage] = useState("Criar");

  const onClick = e => {
    setPage(e.target.innerText);
  }

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
            <li>
              <button onClick={onClick}>Usuários</button>
            </li>
          </ul>
        </nav>
        <main>
          {page == "Criar" && <Create token={token} />}
          {page == "Posts" && <></>}
          {page == "Usuários" && <></>}
        </main>
      </div>
    </main>
  );
};

export default Manage;
