import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { context } from "../Context";
import { toast } from "sonner";

const SignIn = () => {
  const store = useContext(context);
  const [user, setUser] = store.user;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);

  const onClick = async () => {
    setDisable(true);
    try {
      if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) 
        throw "";
      if (password.length < 8) 
        throw "";

      let res = await fetch("/api/auth/signin", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok)
        throw "";

      let data = await res.json();
      setUser(data);
    } catch (err) {
      toast.error("E-mail ou Senha Inválido.");
    } finally {
      setDisable(false);
    }
  };

  return user ? (
    <Navigate to="/gerenciar" />
  ) : (
    <main className="markdown-body" style={{ flexDirection: "column" }}>
      <h1>ろ Login</h1>
      <div className="form">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
        />
        <button disabled={disable} onClick={onClick}>
          Entrar
        </button>
        <span>
          Não tem conta? <Link to="/registrar">Crie uma!</Link>
        </span>
      </div>
    </main>
  );
};

export default SignIn;
