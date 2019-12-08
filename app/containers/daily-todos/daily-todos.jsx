import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Header, TYPES } from "components/header";
import { Input } from "components/input";
import { List } from "./list";
import { FilterBar } from "./filter-bar";

export const DailyTodos = ({
  addTodo,
  toggleComplete,
  removeTodo,
  dailyTodos,
  activeFilter,
  setFilter
}) => (
  <Container>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Header text="Daily Todos" type={TYPES.MEDIUM} />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <FilterBar activeFilter={activeFilter} onFilterChange={setFilter} />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Input onEnter={addTodo} />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <List
          dailyTodos={dailyTodos}
          onRemoveTodo={removeTodo}
          onCompleteTodoToggle={toggleComplete}
          activeFilter={activeFilter}
        />
      </Col>
    </Row>
  </Container>
);
