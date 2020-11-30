import React, { Component } from "react";
import "../../styles.css"
import "./App.css";
import films from "../../films.json";
import { Films } from '../Films';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            {films.items.map((film, index) => {
              return <Films {...film} key={index} />;
            })}
          </Row>
        </Container>
      </div >
    );
  }
}

export default App;
