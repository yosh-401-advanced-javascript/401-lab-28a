import React from 'react';


class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello World',
      name: this.props.name,
      number: this.props.number,
    };
  }

  render() {
    return (
        <div>
          {this.state.text}
          <div>{this.props.name}</div>
          <p>{this.props.number}</p>
        </div>
    );
  }
}


export default Message;
