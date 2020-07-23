import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Input } from "../../../components/input";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export const SubTaskList = ({ onSubTaskInput, subTaskList }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Input onEnter={onSubTaskInput} placeholder="input subtask" />
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col md={8}>
          <ListGroup>
            {subTaskList.map(({ text, id }) => (
              <ListGroupItem> {text} </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
