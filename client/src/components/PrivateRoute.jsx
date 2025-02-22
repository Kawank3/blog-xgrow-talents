import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { context } from "../Context";

const PrivateRoute = (props) => {
  const store = useContext(context);
  const token = store.token[0];
  return token ? 
          props.children : 
          <Navigate 
            to="/login"
            replace={true}
          />
}

export default PrivateRoute;
