import movies from "./Components/Filmdata";
import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

uuidv4();

class Films extends React.Component {
  //to lightmode
  state = {
    isBlack: true,
  };

  lightMode = () => {
    this.setState({ isBlack: !this.state.isBlack });
  };
  state = {
    library: movies,
  };
  //sorting according to names
  sortName = () => {
    let sortedMoviesN = [...this.state.library];
    sortedMoviesN.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    this.setState({ library: sortedMoviesN });
  };
  //sorting accroding to years
  sortYear = () => {
    let sortedMoviesY = [...this.state.library];
    sortedMoviesY.sort(function (a, b) {
      return a.year - b.year;
    });
    console.log(sortedMoviesY);
    this.setState({ library: sortedMoviesY });
  };

  //sorting accroding to rating
  sortRating = () => {
    let sortedMoviesY = [...this.state.library];
    sortedMoviesY.sort(function (a, b) {
      return b.rate - a.rate;
    });
    console.log(sortedMoviesY);
    this.setState({ library: sortedMoviesY });
  };

  render() {
    return (
      <section>
        <div>
          <button onClick={this.sortName}> Sort by Name</button>
          <button onClick={this.sortYear}> Sort by Years</button>
          <button onClick={this.sortRating}> Best Rating</button>
          <button onClick={this.lightMode}>
            {this.state.isBlack ? "to darkmode" : "to lightmode"}
          </button>
        </div>

        <div className="flex">
          {this.state.library.map((elt) => (
            <div
              key={elt.id}
              className={` userName ${this.state.isBlack ? "white" : "black"}`}
            >
              <h1>{elt.title} </h1>
              <h2> {elt.year} </h2>
              <h4> {elt.director} </h4>
              <h3> {elt.duraction} </h3>
              <h3> {elt.genre} </h3>
              <h2> {elt.rate} </h2>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Films;
