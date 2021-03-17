import React from 'react';
import PropTypes from 'prop-types';
import { Gitgraph as GitGraph } from '@gitgraph/react';

import './Graph.css';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      orientation: 'horizontal-reverse',
      mode: 'compact'
    };
  }

  render() {
    return (
      <div>
        <GitGraph options={this.options}>{(git) => this.props.graph(git)}</GitGraph>
      </div>
    );
  }
}

Graph.propTypes = {
  graph: PropTypes.object.isRequired,
};

export default Graph;