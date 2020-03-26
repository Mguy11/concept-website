import React from 'react';

class ContentBlock extends React.Component{
    render() {
        return (
            <section className="section">
                <div className="contentBlock">
                    <div className="wrap">
                        <div className="paragraph">
                            <h2 className="paragraph__title">{this.props.title}</h2>
                            <span className="paragraph__subtitle">{this.props.subtitle}</span>
                            <p className="paragraph__body">{this.props.body}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContentBlock;