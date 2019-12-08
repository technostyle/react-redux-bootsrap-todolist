import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { filterTodoCreator, sortTodoCreator } from "./utils";
import { Todo } from "../todo";

export const List = ({
  dailyTodos,
  activeFilter,
  onCompleteTodoToggle,
  onRemoveTodo
}) => (
  <ListGroup>
    {dailyTodos.length
      ? dailyTodos
          .filter(filterTodoCreator(activeFilter))
          .sort(sortTodoCreator(activeFilter))
          .map(({ id, text, complete }) => (
            <Todo
              key={id}
              id={id}
              text={text}
              complete={complete}
              onCompleteToggle={onCompleteTodoToggle}
              onRemove={onRemoveTodo}
            />
          ))
      : null}
  </ListGroup>
);
