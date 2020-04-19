import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Video = () => {
    return(
        <section className="insights section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <div className="insights__content">
                            <h2 className="insights__title">Pitch</h2>
                            <span className="insights__subtitle">Dit is onze concept pitch.</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 10, offset: 1}}>
                    <iframe src="https://www.youtube.com/embed/AbV-Q6tz4B8"
                        width="100%" height="600" frameborder="0" allowfullscreen className="video__wrapper">
                    </iframe>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Video;