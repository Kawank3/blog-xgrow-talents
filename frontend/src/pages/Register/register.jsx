import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css"; // Importando o CSS

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do Registro:", formData);
        // Aqui você pode enviar os dados para a API
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2 className="register-title">Criar Conta</h2>

                <form onSubmit={handleSubmit} className="register-form">
                    {/* Nome */}
                    <label>Nome</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    {/* Email */}
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {/* Senha */}
                    <label>Senha</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {/* Seleção de Role */}
                    <label>Tipo de Conta</label>
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="user">Usuário</option>
                        <option value="admin">Administrador</option>
                    </select>

                    {/* Botão de Registrar */}
                    <button type="submit">Registrar</button>
                </form>

                {/* Link para login */}
                <div className="login-link">
                    <p>
                        Já tem uma conta? <Link to="/">Faça login aqui</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
