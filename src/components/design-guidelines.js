import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DesignGuidelines = () => {
    return(
        <section className="design section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 9, offset: 1}}>
                        <div className="design__content">
                            <h2 className="design__title">Ontwerprichtlijnen</h2>
                            <span className="design__subtitle">Nadat wij definitief een concept hadden gekozen, hebben wij dit verder uitgewerkt volgens onderstaande ontwerprichtlijnen.</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <ul className="design__list">
                            <li className="design__list-item">
                                <span className="design__list-text">Laat de gebruiker nadenken over digitale vrijheid.</span>
                            </li>
                            <li className="design__list-item">
                                <span className="design__list-text">Laat mensen zien hoe hun gedrag beïnvloed kan worden.</span>
                            </li>
                            <li className="design__list-item">
                                <span className="design__list-text">Zoekt de grenzen op van hoe ver mensen bereid zijn te gaan voor een beloning.</span>
                            </li>
                            <li className="design__list-item">
                                <span className="design__list-text">Maakt mensen bewust over dataverzameling.</span> 
                            </li>
                            <li className="design__list-item">
                                <span className="design__list-text">Maakt de gebruiker nieuwsgierig.</span>
                            </li>
                            <li className="design__list-item">
                                <span className="design__list-text">Het verrast de gebruiker.</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default DesignGuidelines;