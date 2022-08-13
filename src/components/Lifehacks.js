import { Component } from "react";

class Lifehack extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      display: "inline-block",
    };
  }

  ShowLifeHacks() {
    this.setState({
      message: "Life is not a bed of roses, but a garden of life.",
      display: "none",
    });
  }
  render() {
    return (
      <>
        <div className="lifehack">
          <p>{this.state.message}</p>
          <button
            onClick={() => this.ShowLifeHacks()}
            style={{ display: this.state.display }}
          >
            Show Lifehacks
          </button>
        </div>
      </>
    );
  }
}

export default Lifehack;
