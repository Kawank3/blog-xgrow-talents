import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { context } from "../Context";

const PrivateRoute = (props) => {
  const store = useContext(context);
  const user = store.user[0];
  return user ? props.children : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
