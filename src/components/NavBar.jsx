import { useTheme } from "../context/ThemeContext";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar" style={{ backgroundColor: theme === "dark" ?  "#121212":"#f4f4f4" }}>
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link" style={{color: theme === "dark" ? "rgba(255, 255, 255, 1)":"rgba(0, 0, 0, 1)"}}>
          Home
        </Link>
        <Link to="/favorite" className="nav-link" style={{color: theme === "dark" ? "rgba(255, 255, 255, 1)":"rgba(0, 0, 0, 1)"}}>
          Favorite
        </Link>
         <button
        onClick={toggleTheme}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          background: theme === "dark" ? "#f4f4f4" : "#121212",
          color: theme === "dark" ? "#121212" : "#f4f4f4",
          cursor: "pointer",
        }}
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      </div>
    </nav>
  );
}
