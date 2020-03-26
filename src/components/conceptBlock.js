import React from 'react';
import Paragraph from './parts/paragraph';

class ConceptBlock extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="conceptBlock"> 
                    <div className="conceptBlock__content">
                        <h2 className="conceptBlock__title">Concepten</h2>
                        <span className="conceptBlock__subtitle">Insights</span>
                    </div>
                    <div className="conceptBlock__concepts">
                        <div className="concept">
                            <img className="image" src="" alt="concept_image_1"></img>
                            <h4 className="concept__title">Concept 1</h4>
                            <p className="concept__body">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="concept">
                            <img className="image" src="" alt="concept_image_1"></img>
                            <h4 className="concept__title">Concept 2</h4>
                            <p className="concept__body">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="concept">
                            <img className="image" src="" alt="concept_image_1"></img>
                            <h4 className="concept__title">Concept 3</h4>
                            <p className="concept__body">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="concept">
                            <img className="image" src="" alt="concept_image_1"></img>
                            <h4 className="concept__title">Concept 4</h4>
                            <p className="concept__body">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ConceptBlock;