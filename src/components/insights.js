import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Insights = () => {
    return(
        <section className="insights section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <div className="insights__content">
                            <h2 className="insights__title">Inzichten</h2>
                            <span className="insights__subtitle">De vijf belangrijkste inzichten hebben wij op een rijtje gezet.</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 7, offset: 1}}>
                        <ol className="insights__list">
                            <li className="insights__list-item">
                                <span className="insights__list-text">De beloning is des te groter als je hem niet verwacht.</span>
                            </li>
                            <li className="insights__list-item">
                                <span className="insights__list-text">Sociale druk kan veel controle over mensen uitoefenen.</span>
                            </li>
                            <li className="insights__list-item">
                                <span className="insights__list-text">Afgeleide data is het meeste waard.</span>
                            </li>
                            <li className="insights__list-item">
                                <span className="insights__list-text">Mensen beginnen te realiseren dat hun digitale reputatie belangrijk is.</span> 
                            </li>
                            <li className="insights__list-item">
                                <span className="insights__list-text">Je past je gedrag aan als je het gevoel hebt bekeken te worden.</span>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Insights;