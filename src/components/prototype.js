import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Prototype = () => {
    return(
        <section className="insights section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <div className="insights__content">
                            <h2 className="insights__title">Het Prototype</h2>
                            <span className="insights__subtitle">Dit is ons uiteindelijke prototype geworden.</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 6, offset: 1}}>
                    <iframe 
                        width="768" height="1024" 
                        src="https://xd.adobe.com/embed/440dde87-ade4-4776-7ecf-30d663ec47af-323c/?fullscreen" 
                        style={{marginTop: '2rem', borderRadius: '0.4rem'}}
                        frameborder="0" allowfullscreen>    
                    </iframe>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Prototype;