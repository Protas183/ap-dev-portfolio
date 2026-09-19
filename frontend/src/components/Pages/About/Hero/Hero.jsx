import avatar from "../../../../assets/avatar.png";
import "./Hero.css"

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <p className="hero-greeting">
                    Hello, I'm
                </p>

                <h1>
                    Artem Protas
                </h1>

                <h2>
                    Junior Python Developer
                </h2>

                <div className="biography-content">

                <div className="biography-avatar">
                    <img src={avatar} alt="Avatar Artem Protas" width="200px"/>
                </div>

                <div className="biography-info">
                    <p>
                        I'm a Python developer focused on backend development.
                        I enjoy building useful applications, working with
                        databases and turning ideas into real projects.
                    </p>

                    <p>
                        I'm constantly learning, improving my skills and working
                        on personal projects to grow as a developer.
                    </p>

                </div>

            </div>

                <div className="hero-buttons">
                    <button>
                        View Projects
                    </button>

                    <button>
                        Contact Me
                    </button>
                </div>

                <div className="hero-socials">
                    {/* links to GitHub, LinkedIn, Telegram, Email */}
                </div>

            </div>


            <div className="hero-terminal">

                <div className="terminal-header">
                    <span></span>
                    <span></span>
                    <span></span>

                    <p>terminal</p>
                </div>

                <div className="terminal-body">
                    <p>$ whoami</p>

                    <p>Name: Artem Protas</p>
                    <p>Role: Python Developer</p>
                    <p>Location: Poland, Wroclaw</p>
                    <p>Experience: Learning & Building</p>
                    <p>Focus: Backend Development</p>
                    <p>Tech Stack: Python, SQL, FastAPI, Git</p>

                    <p>$</p>
                </div>

                <div className="terminal-status">
                    <span></span>
                    Status: Available for work
                </div>

            </div>

        </section>
    )
}

export default Hero