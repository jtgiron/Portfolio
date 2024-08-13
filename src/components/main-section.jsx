import imageProfile from '../../src/assets/profile.jpg'




export function MainSection() {
    return (
            <section className="main-section">
                <div className="container">
                    <div className="profile">
                        <h2>Full Stack Developer</h2>
                        <p>I'm a passionate software engineer with a proven track record in building scalable and maintainable applications.</p>
                        <img src={imageProfile} alt="Profile" />
                    </div>
                </div>
                <div className="skills">
                    <h2>Skills</h2>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Git</li>
                        </ul>
                </div>
                <div className="projects">
                    <h2>Projects</h2>
                </div>
            </section>
    )
};



