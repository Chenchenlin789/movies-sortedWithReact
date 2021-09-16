import React from "react";

let userData = [
  {
    id: 1,
    first_name: "Wolf",
    last_name: "Burgwyn",
    email: "wburgwyn0@moonfruit.com",
    gender: "Polygender",
  },
  {
    id: 2,
    first_name: "Cash",
    last_name: "Bault",
    email: "cbault1@about.me",
    gender: "Bigender",
  },
  {
    id: 3,
    first_name: "Trude",
    last_name: "Ashby",
    email: "tashby2@unesco.org",
    gender: "Polygender",
  },
  {
    id: 4,
    first_name: "Cornie",
    last_name: "Jerdein",
    email: "cjerdein3@shop-pro.jp",
    gender: "Polygender",
  },
  {
    id: 5,
    first_name: "Laurene",
    last_name: "Pattrick",
    email: "lpattrick4@hp.com",
    gender: "Agender",
  },
  {
    id: 6,
    first_name: "Briney",
    last_name: "Nasey",
    email: "bnasey5@ebay.co.uk",
    gender: "Male",
  },
  {
    id: 7,
    first_name: "Maury",
    last_name: "Smillie",
    email: "msmillie6@ed.gov",
    gender: "Genderfluid",
  },
  {
    id: 8,
    first_name: "Onfroi",
    last_name: "Tall",
    email: "otall7@ehow.com",
    gender: "Non-binary",
  },
  {
    id: 9,
    first_name: "Felicia",
    last_name: "Caddan",
    email: "fcaddan8@pen.io",
    gender: "Genderfluid",
  },
  {
    id: 10,
    first_name: "Carina",
    last_name: "Foss",
    email: "cfoss9@columbia.edu",
    gender: "Polygender",
  },
];

//importing unique ID
// import {v4 as uuidv4} from 'uuid';
// uuidv4()

//cc have to import react using imr in order to execute the cc
class UserData extends React.Component {
  // haribo ist the state und somit die verbidung zu sort
  state = {
    haribo: userData,
  };
  check = () => {
    let roteHaribo = [...this.state.haribo];
    roteHaribo.sort((a, b) => {
      if (a.first_name < b.first_name) {
        return -1;
      }
      if (a.first_name > b.first_name) {
        return 1;
      }
      return 0;
    });
    // shortcut >>>>> roteHaribo.sort((a,b) => a.first_name.localCompare(b.first_name))
    this.setState({ haribo: roteHaribo });
  };

  render() {
    return (
      <div>
        <button onClick={this.check}>Sort</button>
        {this.state.haribo.map((data) => (
          <div key={data.id} className="userCard">
            <h1>{data.first_name} </h1>
            <p> {data.last_name} </p>
            <a href={`mailto:${data.email}`}> my email </a>
          </div>
        ))}
      </div>
    );
  }
}

export default userData;
