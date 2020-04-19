import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MainConcept = () => {
    return(
        <header className="main-concept section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 10, offset: 1}}>
                        <div className="main-concept__content">
                            <h2 className="main-concept__title">De winnaar</h2>
                            <div className="main-concept__body">
                                <Col lg={{span:8, offset: 2}}>
                                <img className="main-concept__image" src="../images/icons/Truck.svg" alt="concept"></img>
                                <h3 className="main-concept__subtitle">Freedom Foodtruck</h3>
                                    <p className="main-concept__text">Op het bevrijdingsfestival staan vaak meerdere foodtrucks. 
                                    Voor onze expositie willen wij daar nog een foodtruck aan toevoegen, namelijk de Freedom Foodtruck. 
                                    Bij deze installatie kunnen bezoekers een bestelling plaatsen bij onze bestelpaal. Wat de gebruiker niet door heeft, 
                                    is dat wij tijdens de bestelling allerlei data hebben verzameld. Zo kunnen wij met een sensor in de startknop de hartslag meten. 
                                    Met een combinatie van een laser en weegschaal het BMI uitrekenen en doormiddel van gezichtsherkenningssoftware in de camera, het geslacht, de aantrekkelijkheid en leeftijd berekenen.
                                    </p>
                                    <p className="main-concept__text">
                                    Met de verzamelde data geven wij en score aan de gebruiker. Met een lage score en dus een ongezonde leefstijl, moet de gebruiker belasting betalen over zijn bestelling. Met een hoge score krijgt de gebruiker korting op zijn bestelling. Mocht de gebruiker extra korting willen, bestaat er een mogelijkheid om persoonlijke data vrijwillig af te staan.
                                    </p>
                                    <p className="main-concept__text">
                                    Nadat de gebruiker heeft betaald wordt er een transactie bon uitgeprint. Hierop staat zijn bestelnummer, alle belastingen en/of korting en extra toelichting over de installatie. Alle verzamelde data over de gebruiker wordt onmiddellijk verwijderd.
                                    </p>
                                </Col>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </header>
    );
}

export default MainConcept;