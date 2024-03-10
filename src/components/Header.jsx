import myImage from "../assets/imgs/MyBestPhoto.jpg";

import "../styles/App.css";

export default function Header() {
    return (
        <header className="header">
            <div className="text-container">
            <h1>Jonathan Torres</h1>
            <p>Full Stack Developer</p>
            </div>
            <div className="image-container">
            <img id="myImage" src={myImage} alt="JonathanTorresBones" />
            </div>
        </header>
    );
}