import React from 'react';

import './Question.css';

class Question extends React.Component {

  render() {
    return (
      <div>
        <span>{this.props.msg}</span>
      </div>
    );
  }
}

export default Question;