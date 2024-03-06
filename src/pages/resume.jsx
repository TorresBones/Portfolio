import resume from "../assets/Resume.pdf";
export default function Resume() {
    return (
        <>
        <section>
            <h2>
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