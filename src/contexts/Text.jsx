import React from 'react';
import PropTypes from 'prop-types';


const no_message = 'No message can be found.';

class Text extends React.Component {

  serious = [];
  funny = [];


  getSerious() {
    this.serious[this.serious.length * Math.random() | 0] || no_message;
  }

  getFunny() {
    this.funny[this.funny.length * Math.random() | 0] || no_message;
  }

  render() {
    return false;
  }
}


Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;