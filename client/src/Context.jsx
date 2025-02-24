import { createContext, useEffect, useState } from "react";

export const context = createContext();
export const Provider = (props) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storagedToken = localStorage.getItem("token");
    if (storagedToken)
      setToken(storagedToken);
  }, []);

  useEffect(() => {
    if (token)
      localStorage.setItem("token", token);
    else
      localStorage.removeItem("token");
  }, [token]);

  return (
    <context.Provider value={{ token: [token, setToken] }}>
      {props.children}
    </context.Provider>
  );
};
