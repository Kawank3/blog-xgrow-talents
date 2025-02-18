import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() !== "" && password.trim() !== "") {
            navigate("/home");
        } else {
            alert("Preencha todos os campos!");
        }
    };

    return (
        <div className="login-card">
            <div className="tabs">
                <button
                    className={`tab-btn ${!isAdmin ? "active" : ""}`}
                    onClick={() => setIsAdmin(false)}
                >Usuário</button>
                <button
                    className={`tab-btn ${isAdmin ? "active" : ""}`}
                    onClick={() => setIsAdmin(true)}
                >Administrador</button>
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={isAdmin ? "Email do administrador" : "Email do usuário"}
                        required
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    />

                    <button type="submit">Entrar</button>
                </form>

                <div className="register-link">

                    <p>Não tem uma conta? <Link to="/register">Clique aqui para registrar</Link></p>

                </div>
            </div>
        </div>
    );
}
