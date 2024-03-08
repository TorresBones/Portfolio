import { Link } from "react-router-dom";

export default function Navbar() {
    const linkStyle = { border: "2px black", padding: "5px", textDecoration:"none" };

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
                to="/"
                // activeclassName="active"
            >
            About
            </Link>
            </div>
            <div style={linkStyle}>
                <Link
                to="/projects"
                // activeclassName="active"
            >
            Projects
            </Link>
            </div>
            <div style={linkStyle}>
                <Link
                to="/resume"
                // activeclassName="active"
            >
            Resume
            </Link>
            </div>
            </section>
        </nav>
    );
}

