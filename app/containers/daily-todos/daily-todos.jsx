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
  updateTodo,
  dailyTodos,
  setTodoLevel,
  setTodoPriority,
  activeFilter,
  setFilter,
  setLevelSorting,
  setPrioritySorting,
  setDateSorting,
  addSubTask,
  sortingParams,
  toggleCompleteSubTask,
  removeSubTask
}) => (
  <Container>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Header text="Daily Todos" type={TYPES.MEDIUM} />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        {/*  TODO: rename to just Bar or something */}
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setFilter}
          onLevelSort={setLevelSorting}
          onPrioritySort={setPrioritySorting}
          onDateSort={setDateSorting}
          sortingParams={sortingParams}
        />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Input onEnter={addTodo} placeholder="input todo" />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <List
          dailyTodos={dailyTodos}
          onRemoveTodo={removeTodo}
          onTodoUpdate={updateTodo}
          onCompleteTodoToggle={toggleComplete}
          onLevelChange={setTodoLevel}
          onPriorityChange={setTodoPriority}
          onSubTaskAdd={addSubTask}
          activeFilter={activeFilter}
          sortingParams={sortingParams}
          onSubTaskCompleteToggle={toggleCompleteSubTask}
          onSubTaskRemove={removeSubTask}
        />
      </Col>
    </Row>
  </Container>
);
