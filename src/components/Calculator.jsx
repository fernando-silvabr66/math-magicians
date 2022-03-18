import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <Container>
          <Row className="m-2">
            <Col>
              <div dir="rtl" className="w-100 p-2 result">
                { result }
              </div>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Button className="w-100 p-4">AC</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4">+/-</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4">%</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations">/</Button>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Button className="w-100 p-4">7</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4">8</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4">9</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations">
                x
              </Button>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Button className="w-100 p-4">4</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4">5</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4">6</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations">
                -
              </Button>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Button className="w-100 p-4">1</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4">2</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4">3</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations">
                +
              </Button>
            </Col>
          </Row>
          <Row className="m-2">
            <Col xs={6}>
              <Button className="w-100 p-4">0</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4">.</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations">
                =
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Calculator;
