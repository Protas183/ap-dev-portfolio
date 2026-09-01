import "./Footer.css"

function Footer() {

    return (
        <footer>
            <div className="footer">
                <div className="footer-left">
                    <p>&copy; 2026 Artem Protas.</p>
                    <p>All rights reserved.</p>
                </div>
                <div className="footer-center">
                    <p>Built with <span className="footer-center-heart">&hearts;</span></p>
                </div>
                <div className="footer-right">
                    <button className="footer-right-button">
                        Back to top <span>&uarr;</span>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer