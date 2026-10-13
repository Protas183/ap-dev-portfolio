import "./Header.css";
import { Link } from "react-router-dom";

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
                    <li className="header-hero-list-page">
                        <Link to="/" className="header-hero-list-page-link">
                            About
                        </Link>
                    </li>

                    <li className="header-hero-list-page">
                        <Link to="/projects" className="header-hero-list-page-link">
                            Projects
                        </Link>
                    </li>

                    <li className="header-hero-list-page">
                        <Link to="/experience" className="header-hero-list-page-link">
                            Experience
                        </Link>
                    </li>

                    <li className="header-hero-list-page">
                        <Link to="/contact" className="header-hero-list-page-link">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div>
                    <button className="header-downloand-cv">
                        Download CV
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;