import { useContext } from "react";
import { Link } from "react-router-dom";

import { context } from "../Context";

const Nav = () => {
  const store = useContext(context);
  const [user, setUser] = store.user;

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
          !user && 
          <li><Link to="/login">Login</Link></li>
        }
        {
          user && 
          <>
          <li><Link to="/gerenciar">Gerenciar</Link></li>
          <li><Link onClick={() => setUser()}>Logout</Link></li>
          </>
        }
      </ul>
    </nav>
  );
};

export default Nav;
