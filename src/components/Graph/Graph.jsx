import './Graph.css';

import { Gitgraph as GitGraph } from '@gitgraph/react';
import React from 'react';

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

export default Graph;