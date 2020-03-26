import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__link-items">
                <li className="footer__link-item">
                    <a href="#" className="footer__link">Link 1</a>
                </li>
                <li className="footer__link-item">
                    <a href="#" className="footer__link">Link 2</a>
                </li>
                <li className="footer__link-item">
                    <a href="#" className="footer__link">Link 3</a>
                </li>
                <li className="footer__link-item">
                    <a href="#" className="footer__link">Link 4</a>
                </li>
            </ul>
            <div className="footer__content">
                <span className="footer__text">L'Escargo de la Liberté</span>
                <span className="footer__text">&nbsp;&copy;&nbsp;2020</span>
            </div>
        </footer>
    );
}

export default Footer;