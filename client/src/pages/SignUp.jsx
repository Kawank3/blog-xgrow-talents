import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { context } from "../Context";

const SignUp = () => {
  const navigate = useNavigate();

  const store = useContext(context);
  const token = store.token[0];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);

  const onClick = async () => {
    setDisable(true);
    try {
      if (!name)
        throw "Nome Inválido";
      if (!email.match(/^[^@]+@[^@]+\.[^@]+$/))
        throw "E-mail Inválido"
      if (password.length < 8)
        throw "Senha Inválida, mínimo 8 caracteres."

      let res = await fetch('/api/auth/signup', {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (res.ok)
        navigate('/login');
    } catch (err) {
      toast.error(err);
    } finally {
      setDisable(false);
    }
  }

  return token ? <Navigate to="/gerenciar"/> : (
    <main className="markdown-body" style={{ flexDirection: "column" }}>
      <h1>れ Registrar</h1>
      <div className="form">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" type="text"/>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password"/>
        <button disabled={disable} onClick={onClick}>Criar</button>
        <span>Já tem conta? <Link to="/login">Entrar</Link></span>
      </div>
    </main>
  );
}

export default SignUp;
