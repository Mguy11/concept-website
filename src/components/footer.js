import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return(
        <header className="footer">
            <div className="wrap">
                <Row className="justify-content-lg-center">
                    <Col lg={{span: 3}}>
                        <span className="footer__divider"></span>
                        <div className="header__content footer__logo">
                            <div className="footer__image" alt="logo-l'escargot"></div>
                            <h2 className="footer__title">L'Escargot de la Liberté</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        </header>
    );
}

export default Footer;