import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Insights = () => {
    return(
        <section className="research section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <div className="research__content">
                            <h2 className="research__title">Inzichten</h2>
                            <span className="research__subtitle">De vijf belangrijkste inzichten hebben wij op een rijtje gezet.</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <ol className="insights__list">
                            <li className="insights__list-item">
                                <span className="insights__list-text">Social cooling</span>
                            </li>
                            <li className="insights__list-item">
                                <span className="insights__list-text">Behavioural design</span>
                            </li>
                            <li className="insights__list-item">
                                <span className="insights__list-text">Biofeedback</span>
                            </li>
                            <li className="insights__list-item">
                                <span className="insights__list-text">Sensoren</span> 
                            </li>
                            <li className="insights__list-item">
                                <span className="insights__list-text">De waarde van data</span>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Insights;