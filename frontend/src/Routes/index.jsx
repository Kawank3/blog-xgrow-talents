import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import RegisterForm from "../pages/Register/register";


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/" element={<Login />} /> {/* Página inicial como Login */}
                <Route path="/home" element={<Home />} /> {/* Página Home */}
            </Routes>
        </Router>
    );
}

