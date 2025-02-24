import { useContext } from "react";
import { Link } from "react-router-dom";

import { context } from "../Context";

const Nav = () => {
  const store = useContext(context);
  const [token, setToken] = store.token;

  return (
    <nav>
      <b>
        <Link to="/">カ Kawan</Link>
      </b>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {
          !token && 
          <li><Link to="/login">Login</Link></li>
        }
        {
          token && 
          <>
          <li><Link to="/gerenciar">Gerenciar</Link></li>
          <li><Link onClick={() => setToken()}>Logout</Link></li>
          </>
        }
      </ul>
    </nav>
  );
};

export default Nav;
