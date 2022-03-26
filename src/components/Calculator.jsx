import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import calc from '../calc-events/calc';
import '../style/Calculator.css';

function Calculator() {
  const [state, setState] = useState({
    results: null,
    next: null,
    operation: null,
    valueToShow: 0,
  });

  const clickHandler = (e) => {
    const newValues = calc(state, e.target.textContent);
    const { results, next, operation } = newValues;
    let valueToShow = '';
    if (next !== null && next !== undefined) {
      if (operation !== null && operation !== undefined) {
        valueToShow = `${results} ${operation} ${next}`;
      } else {
        valueToShow = next;
      }
    } else if (next === null && operation !== null) {
      valueToShow = operation;
    } else {
      valueToShow = (results !== null && results !== undefined) ? results : '0';
    }
    setState({
      results,
      next,
      operation,
      valueToShow,
    });
  };

  const { valueToShow } = state;
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
            <Button className="w-100 p-4" onClick={clickHandler}>AC</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>+/-</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>%</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-operations" onClick={clickHandler}>÷</Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>7</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>8</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>9</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-operations" onClick={clickHandler}>
              x
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>4</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>5</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>6</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-operations" onClick={clickHandler}>
              -
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>1</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>2</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>3</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-operations" onClick={clickHandler}>
              +
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col xs={6}>
            <Button className="w-100 p-4" onClick={clickHandler}>0</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>.</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-operations" onClick={clickHandler}>=</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Calculator;
