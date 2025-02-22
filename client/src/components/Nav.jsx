import { useContext } from "react";
import { Link } from "react-router-dom";

import { context } from "../Context";

const Nav = () => {
  const store = useContext(context);
  const token = store.token[0];

  return (
    <nav>
      <b><Link to="/">カ Kawan</Link></b>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link 
            to={token ? "/gerenciar" : "/login"}
          >{token ? "Gerenciar" : "Login"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
