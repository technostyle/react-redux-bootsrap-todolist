import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FILTER_TYPES } from "modules/daily-todos/constants";
import { Todo } from "./todo";

const filterTodoCreator = activeFilter => {
  switch (activeFilter) {
    case FILTER_TYPES.ALL:
      return () => true;
    case FILTER_TYPES.COMPLETE:
      return ({ complete }) => complete;
    case FILTER_TYPES.UNCOMPLETE:
      return ({ complete }) => !complete;
      deafult: return () => false;
  }
};

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
