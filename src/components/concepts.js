import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Concept from './webparts/concept';

const Concepts = () => {
    return(
        <section className="concepts section">
            <div className="wrap">
                <Row>
                    <Col lg={{span: 5, offset: 1}}>
                        <div className="concepts__content">
                            <h2 className="concepts__title">De concepten</h2>
                        </div>
                    </Col>
                </Row>
                <Concept
                    class="concept"
                    image="../images/icons/Truck.svg"
                    title="1. Freedom Foodtruck"
                    body="Op het bevrijdingsfestival staan vaak meerdere foodtrucks. 
                    Voor onze expo willen wij daar nog 1 foodtruck aan toevoegen, namelijk de free<dom> truck. 
                    Hier kunnen mensen eten kopen met hun eigen data. Op de boorden rond de foodtruck kunnen 
                    mensen zien hoeveel hun data waard is en wat zij kunnen kopen aan de hand van hun data. 
                    Op de apparaten rond foodtruck kunnen mensen bestelling afgeven en betalen."
                />
                <Concept
                    class="concept"
                    image="../images/icons/Camera.svg"
                    title="2. Freedom Photobooth"
                    body="De expo zal bestaan uit een aantal schermen waar foto’s op weergeven worden. 
                    In het midden van alle schermen een ‘photobooth’. Met deze booth kunnen mensen foto’s maken, 
                    deze foto’s worden weergeven op de schermen door het gehele festival. Wanneer iemand op de foto 
                    klikt zal de foto omdraaien. De achterkant zal een combinatie van metadata en data afkomstig van hun social media weergeven."
                />
                <Concept
                    class="concept"
                    image="../images/icons/Gevangenis.svg"
                    title="3. Digital prison"
                    body="Mensen zijn zich vaak niet bewust dat ze vrijwillig hun sociale/ persoonlijk opgeven, voor digitale vrijheid. 
                    Om mensen zich hiervan bewust te maken willen we ze eerst hun digitale vrijheid volledig afnemen. Dit willen we doen door mensen 
                    op te sluiten in een virtuele gevangenis, deze gevangenis moet hun digitale vrijheid voor stellen. Om uit deze gevangenis te kunnen
                        ontsnappen moeten zij hun persoonlijke vrijheid opgeven in de vorm van data."
                />
                <Concept
                    class="concept"
                    image="../images/icons/Koekje.svg"
                    title="4. Grab That Cookie!"
                    body="In het midden van onze stand staat een grote pilaar met daarop een brod vol met gigantisch lekkere koekjes. Om deze koekjes te kunnen winnen/vrijspelen
                        moeten mensen zich opgeven via de machine. Wanneer men de bepaald aantal vragen binnen de tijd heeft ingevuld zullen zij de koekjes vrijgeven. Wat de deelnemers 
                        niet door hebben gehad is dat aan de hand van hun ingevulde data er een profiel gecreëerd is."
                />
                
            </div>
        </section>
    );
}

export default Concepts;