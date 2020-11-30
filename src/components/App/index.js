import React, { Component } from "react";
import "../../styles.css"
import "./App.css";
import films from "../../films.json";
import { Films } from '../Films';
import  Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <div className="cards">
                {films.items.map((film, index) => {
                  return <Films {...film} key={index} />;
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
