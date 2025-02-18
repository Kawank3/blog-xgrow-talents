import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">Xgrow Blog</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/homem">Home</Link></li>
              <li><Link to="/">Logout</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}