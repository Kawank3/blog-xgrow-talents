import { createContext, useState } from "react";

export const context = createContext();
export const Provider = (props) => {
  const token = useState();
  return (
    <context.Provider value={{ token }}>
      {props.children}
    </context.Provider>
  );
}
