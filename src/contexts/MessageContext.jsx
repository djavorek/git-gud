import React from 'react';
import PropTypes from 'prop-types';

import InitialCommits from './texts/InitialCommits';

const MessageContext = React.createContext();

class MessageProvider extends React.Component {



  render() {
    return (
      <MessageContext.Provider
        value={{
          initialCommits: InitialCommits.getSerious
        }}
      >
        {this.props.children}
      </MessageContext.Provider>
    );
  }
}


MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MessageContext, MessageProvider };
