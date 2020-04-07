import React,{ Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Research = () => {
    return(
        <section className="research section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <div className="research__content">
                            <h2 className="research__title">Onderzoek</h2>
                            <span className="research__subtitle">We hebben onderzoek gedaan naar onderstaande onderwerpen.</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <ul className="research__list">
                            <li className="research__list-item">
                                <span className="research__list-text">Social cooling</span>
                            </li>
                            <li className="research__list-item">
                                <span className="research__list-text">Behavioural design</span>
                            </li>
                            <li className="research__list-item">
                                <span className="research__list-text">Biofeedback</span>
                            </li>
                            <li className="research__list-item">
                                <span className="research__list-text">Sensoren</span> 
                            </li>
                            <li className="research__list-item">
                                <span className="research__list-text">De waarde van data</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Research;