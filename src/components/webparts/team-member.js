import React,{ Component } from 'react';
import { Col } from 'react-bootstrap';

export default class TeamMember extends Component {
    render() {
        return(
            <Col >
                <div className="team-member">
                    <img className="team-member__image" src={this.props.image} alt="team-member" draggable="false"></img>
                    <span className="team-member__name">{this.props.name}</span>
                </div>
            </Col>
        );
    }
}