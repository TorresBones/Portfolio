import "../styles/index.css";

export default function About() {
    const aboutMe = `Hello, I'm Jonathan, a passionate web developer with a focus on creating engaging and user-friendly digital experiences. With a certificate in Full Stack Web Developer, I thrive on turning ideas into reality through code.

    My expertise lies in HTML, CSS, JavaScript, and React, with a keen eye for design and usability. 
    
    
    I'm driven by a desire to create elegant solutions to complex problems, always striving to stay updated with the latest technologies and best practices in the industry.
    
    I'm a passionate movie enthusiast who savors quality time with my family, whether it's catching a film at the theater or dining out together. Beyond that, I find joy in playing basketball and sharing video game adventures with my son. I firmly believe in the power of continuous learning, collaboration, and pushing the limits of what's achievable. These values shape not only my personal pursuits but also how I approach challenges and opportunities in all aspects of life.
    
    
    
    I've had the opportunity to work on diverse projects ranging from responsive websites to interactive web applications, each teaching me valuable lessons and fueling my passion for innovation. Whether it's optimizing performance, enhancing accessibility, or crafting pixel-perfect designs, I'm committed to delivering exceptional results that exceed expectations.
    
    I'm excited to collaborate on new projects and contribute to meaningful initiatives. Let's connect and bring your ideas to life!`;

    return (
        <section id="aboutme" className="about-section">
            <h2>About Me</h2>
            <p>{aboutMe}</p>
        </section>
    );
}