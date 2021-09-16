import movies from "./Filmdata";
import React from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";

uuidv4();

class Films extends React.Component {
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

  render() {
    return (
      <div>
        <button onClick={this.sortName}> sort names</button>
        <button onClick={this.sortYear}> sort years</button>
        {this.state.library.map((elt) => (
          <div key={elt.id} className="userCard">
            <h1>{elt.title} </h1>
            <h2> {elt.year} </h2>
            <h4> {elt.director} </h4>
            <h3> {elt.duraction} </h3>
            <h3> {elt.genre} </h3>
            <h2> {elt.rating} </h2>
          </div>
        ))}
      </div>
    );
  }
}

export default Films;
