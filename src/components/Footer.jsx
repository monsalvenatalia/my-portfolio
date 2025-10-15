export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <span><p>© {year} Natalia Monsalve</p></span>
                </div>

                <div className="footer-center">
                    Contact: <a href="mailto:nataliamonsalve106@gmail.com">nataliamonsalve106@gmail.com</a>
                </div>

                <div className="footer-right">
                    <span>Portfolio</span>
                </div>
            </div>
        </footer>
    )
}