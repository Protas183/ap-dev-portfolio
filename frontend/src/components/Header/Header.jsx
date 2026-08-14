import "./Header.css"

function Header() {

    return (
        <header>
            <div className="header">
                <div className="header-main-logo">
                    <h2>&lt;/&gt;</h2>
                    <h3>AP</h3>
                    <h5>Artem Protas</h5>
                </div>
                <ul className="header-hero-list">
                    <li className="header-hero-list-page">About</li>
                    <li className="header-hero-list-page">Skills</li>
                    <li className="header-hero-list-page">Projects</li>
                    <li className="header-hero-list-page">Experience</li>
                    <li className="header-hero-list-page">Contact</li>
                </ul>
                <div>
                    <button className="header-downloand-cv">
                        Download CV
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header