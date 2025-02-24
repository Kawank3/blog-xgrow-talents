import { createContext, useEffect, useState } from "react";

export const context = createContext();
export const Provider = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const storagedUser = localStorage.getItem("user");
    if (storagedUser)
      setUser(JSON.parse(storagedUser))
  }, []);

  useEffect(() => {
    if (user)
      localStorage.setItem("user", JSON.stringify(user));
    else
      localStorage.removeItem("user");
  }, [user]);

  return (
    <context.Provider value={{ user: [user, setUser] }}>
      {props.children}
    </context.Provider>
  );
};
