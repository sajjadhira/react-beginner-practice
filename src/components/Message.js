import { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      display: "inline-block",
    };
  }

  chnageMessage(message) {
    this.setState({
      message: message,
      display: "none",
    });
  }
  render() {
    return (
      <div className="message">
        <p>{this.state.message}</p>
        <button
          onClick={() =>
            this.chnageMessage(
              "Thanks dear for subscribing to our newsletter. "
            )
          }
          style={{ display: this.state.display }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Message;
