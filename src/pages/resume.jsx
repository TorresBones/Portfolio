import resume from "../assets/Resume.pdf";

import resumeimg from "../assets/imgs/ResumeScreenshot.JPG";
import resumeimg1 from "../assets/imgs/ResumeScreenshot1.JPG";

import "../styles/index.css"

export default function Resume() {
    return (
        <>
        <section id="resume-container">
        <h2>
                Download my Resume{" "}
                <a href={resume} download="Jonathan-Torres-Resume">
                    here
                </a>
            </h2>
            <div>
            <img src={resumeimg} alt="Resume Page 1" />
            <img src={resumeimg1} alt="Resume Page 2" />
            </div>
            <br></br>
        </section>
        </>
    );
}