import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Testresults = () => {
    return(
        <section className="testresults section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <div className="testresults__content">
                            <h2 className="testresults__title">Testresultaten</h2>
                            <span className="testresults__subtitle">Als eerste hebben wij een paper prototype uitgewerkt (<a href="https://projects.invisionapp.com/share/SKWSXP7WT57#/screens" className="testresults__link">klik hier</a>).
                            Dit paper prototype is volgens een testplan getest bij vier participanten. De resultaten van deze tests hebben wij met elkaar besproken en vergeleken. De tien belangrijkste vervolgstappen zijn gerangschikt op een lijst (1 = hoogste prioriteit, 10 = laagste prioriteit).
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 7, offset: 1}}>
                        <ol className="testresults__list">
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Nadruk ligt volgens de gebruikers momenteel op beoordeling eetkeuzes.</span>
                            </li>
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Voortgangsbalk is momenteel verwarrend.</span>
                            </li>
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Betekenis prijzen niet duidelijk.</span>
                            </li>
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Het definitieve menu moet bepaald worden.</span> 
                            </li>
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Presentatie beginscherm wijzigen (spannender maken).</span>
                            </li>
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Bedenken wat voor extra data we kunnen verkrijgen.</span>
                            </li>
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Discriminatiebon/folder meegeven met extra toelichting.</span>
                            </li>
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Extra belasting toevoegen voor eetgewoontes (vega/omnivoor/milieubelasting).</span>
                            </li>
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Korting voor vrijwillig afgegeven data.</span> 
                            </li>
                            <li className="testresults__list-item">
                                <span className="testresults__list-text">Titel concept wijzigen.</span>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Testresults;