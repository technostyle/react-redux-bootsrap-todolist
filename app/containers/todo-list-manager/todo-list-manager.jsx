import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Header, TYPES } from "components/header";
import { Input } from "components/input";
import { TodoList } from "../todo-list";
import { FilterSortBar } from "../filter-sort-bar";

export const TodoListManager = ({ addTodo }) => (
  <Container>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Header text="Todo list" type={TYPES.MEDIUM} />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <FilterSortBar />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Input onEnter={addTodo} placeholder="input todo" />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <TodoList />
      </Col>
    </Row>
  </Container>
);
