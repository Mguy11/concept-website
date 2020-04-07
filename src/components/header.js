import React,{ Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return(
        <header className="header section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 4, offset: 1}}>
                        <div className="header__content">
                            <h1 className="header__title">Onepager</h1>
                            <span className="header__subtitle">Met dit project willen wij mensen bewust maken over de effecten van
                            social cooiling. Op deze pagina kan je meer lezen over ons proces en tot welke oplossing wij zijn</span>
                        </div>
                    </Col>
                    <Col lg={{span: 4, offset: 1}}>
                        <div className="header__content header__logo">
                            <div className="logo__image" alt="logo-l'escargo"></div>
                            <h2 className="logo__title">L'Escargo de la Liberté</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        </header>
    );
}

export default Header;