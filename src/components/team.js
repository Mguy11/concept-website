import React,{ Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember from './webparts/team-member';

const Team = () => {
    return(
        <section className="team section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 3, offset: 1}}>
                        <h2 className="team__title">Het Team</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 10, offset: 1}}>
                        <div className="team__member-list">
                            <TeamMember 
                                image="../images/icons/Beer.svg"
                                name="Martijn"
                            />
                            <TeamMember
                                image="../images/icons/Panda.svg"
                                name="Nienke"
                            />
                            <TeamMember 
                                image="../images/icons/Kat.svg"
                                name="Jasha"
                            />  
                            <TeamMember 
                                image="../images/icons/Hond.svg"
                                name="Sven"
                            />
                            <TeamMember 
                                image="../images/icons/Olifant.svg"
                                name="Michael"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Team;