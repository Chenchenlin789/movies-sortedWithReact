import React from "react";

class Change extends React.Component {
  state = {
    isBlack: true,
  };

  lightMode = () => {
    this.setState({ isBlack: !this.state.isBlack });
  };

  render() {
    return (
      <div
        className={`
      userName
      ${this.state.isBlack ? "white" : "black"}
              `}
      >
        <h2> {this.state.isBlack ? "Day" : "Night"}</h2>
        <button onClick={this.lightMode} style={{ margin: "5px" }}>
          {this.state.isBlack ? "to darkmode" : "to lightmode"}
        </button>
      </div>
    );
  }
}

export default Change;
