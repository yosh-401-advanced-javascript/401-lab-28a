
import React from 'react';
import Message from './Components/Message'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Han Solo',
      number: '4'
    };

  }


  render() {
    return (
        <div>
          <Message
              name={this.state.name}
              number={this.state.number}
          />
        </div>
    )
  }
}

export default App
