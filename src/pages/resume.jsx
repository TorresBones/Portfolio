import resume from "../assets/Resume.pdf";

import "../styles/index.css"

export default function Resume() {
    return (
        <>
        <section>
            <div className="resume-container">
            <iframe src={resume} width="100%" height="100%"></iframe>
            </div>

            <h2 id="resume-container">
                Download my Resume{" "}
                <a href={resume} download="Jonathan-Torres-Resume">
                    here
                </a>
            </h2>
            <br></br>
        </section>
        </>
    );
}