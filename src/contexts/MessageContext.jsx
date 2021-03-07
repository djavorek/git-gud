import React from 'react';


const MessageContext = React.createContext();

class MessageProvider extends React.Component {

  initMessages = [
    'Initial commit',
    'Sig mundus creatus est'
  ]

  render() {
    return (
      <MessageContext.Provider
        value={{
          initMessages: this.initMessages
        }}
      >
        {this.props.children}
      </MessageContext.Provider>
    );
  }
}

export { MessageContext, MessageProvider };
