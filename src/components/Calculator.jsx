import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import calc from '../calc-events/calc';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      next: null,
      operation: null,
      valueToShow: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    const newValues = calc(this.state, e.target.textContent);
    this.setState(() => newValues);
    const { results, next, operation } = newValues;
    if (next !== null && next !== undefined) {
      if (operation !== null && operation !== undefined) {
        const formula = `${results} ${operation} ${next}`;
        this.setState({ valueToShow: formula });
      } else this.setState({ valueToShow: next });
    } else if (next === null && operation !== null) this.setState({ valueToShow: operation });
    else this.setState({ valueToShow: (results !== null && results !== undefined) ? results : '0' });
  }

  render() {
    const { valueToShow } = this.state;
    return (
      <div className="calculator">
        <Container>
          <Row className="m-2">
            <Col>
              <div className="w-100 p-2 result">
                { valueToShow }
              </div>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>AC</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>+/-</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>%</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations" onClick={this.clickHandler}>÷</Button>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>7</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>8</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>9</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations" onClick={this.clickHandler}>
                x
              </Button>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>4</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>5</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>6</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations" onClick={this.clickHandler}>
                -
              </Button>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>1</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>2</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>3</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations" onClick={this.clickHandler}>
                +
              </Button>
            </Col>
          </Row>
          <Row className="m-2">
            <Col xs={6}>
              <Button className="w-100 p-4" onClick={this.clickHandler}>0</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4" onClick={this.clickHandler}>.</Button>
            </Col>
            <Col>
              <Button className="w-100 p-4 btn-operations" onClick={this.clickHandler}>=</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Calculator;
