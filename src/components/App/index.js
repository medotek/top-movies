import React, { Component } from "react";
import "../../styles.css"
import "./App.css";
import films from "../../films.json";
import { Films } from '../Films'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <main className="main-area">
          <div className="cards">
            {films.items.map((film, index) => {
              return <Films {...film} key={index} />;
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
