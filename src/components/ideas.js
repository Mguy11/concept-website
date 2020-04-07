import React,{ Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Ideas = () => {
    return(
        <section className="ideas section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <div className="ideas__content">
                            <h2 className="ideas__title">Ideegeneratie</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 10, offset: 1}}>
                        <div className="ideas__image-block">
                            <h3 className="ideas__subtitle">Mindmap</h3>
                            <img className="ideas__head-image" src="../images/Mindmap.jpeg" alt="mindmap"></img>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <div className="ideas__image-block">
                            <h3 className="ideas__subtitle">COCD-Box</h3>
                            <img className="ideas__image" src="../images/COCD-Box.jpeg" alt="COCD-Box"></img>
                        </div>
                    </Col>
                    <Col lg={{span: 5}}>
                        <div className="ideas__image-block">
                            <h3 className="ideas__subtitle">HMW's</h3>
                            <img className="ideas__image" src="../images/HMW_s.jpeg" alt="HMW_s"></img>
                        </div>
                </Col>
                </Row>
            </div>
        </section>
    );
}

export default Ideas;