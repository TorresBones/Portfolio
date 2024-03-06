import React from "react";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";

export default function Footer() {
    return (
        <footer>
            <h4>Developed by Jonathan Torres Bones</h4>
                <ul className="footer-icons">
                    <li className="socialmedia-icons" id="socialmediaicons">
                        <a
                        href="https://github.com/TorresBones"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="socialmedia-icons" id="socialmediaicons">
                        <a
                        href="https://twitter.com/JohnnyTW10"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li className="socialmedia-icons" id="socialmediaicons">
                        <a
                        href="https://www.instagram.com/jtorresbones/"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
        </footer>
    );
}