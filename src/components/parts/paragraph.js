import React from 'react';

class Paragraph extends React.Component {
  render(){
    return (
      <div className="paragraph">
        <h2 className="paragraph__title">{this.props.title}</h2>
        <span className="paragraph__subtitle">{this.props.subtitle}</span>
        <p className="paragraph__body">{this.props.body}</p>
      </div>
    );
  }
}

export default Paragraph;