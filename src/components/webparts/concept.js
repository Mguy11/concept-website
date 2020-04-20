import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Concept extends Component {
    render() {
        return(
            <div className={this.props.class}>
                <Row>
                    <Col lg={{span:5, offset: 1}}>
                        <div className="concept__image-wrapper">
                            <img className="concept__image" src={this.props.image} alt="concept" draggable="false"></img>
                        </div>
                    </Col>
                    <Col lg={{span:4, offset: 1}}>
                        <div className="concept__content">
                            <h3 className="concept__title">{this.props.title}</h3>
                            <p className="concept__body">{this.props.body}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}