import { Link } from "react-router-dom";

export default function Navbar() {
    const linkStyle = { border: "2px black", padding: "5px" };

    return (
        <nav className="main-menu">
            <section style={{ 
        display: "flex",
        fontFamily: "sans-serif",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around", 
        }}>
            <div style={linkStyle}>
                <Link
                to="./About"
                className={ ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "" }
            >
            About
            </Link>
            </div>
            <div style={linkStyle}>
                <Link
                to="./projects"
                className={ ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "" }
            >
            Projects
            </Link>
            </div>
            <div style={linkStyle}>
                <Link
                to="./resume"
                className={ ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "" }
            >
            Resume
            </Link>
            </div>
            </section>
        </nav>
    );
}

