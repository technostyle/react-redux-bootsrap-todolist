import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { filterTodoCreator, sortParamsComparator } from "./utils";
import { Todo } from "../todo";

export const List = ({
  dailyTodos,
  activeFilter,
  onCompleteTodoToggle,
  onRemoveTodo,
  onLevelChange,
  onPriorityChange,
  sortingParams
}) => (
  <ListGroup>
    {dailyTodos.length
      ? dailyTodos
          .filter(filterTodoCreator(activeFilter))
          // .sort(statusSortCreator(activeFilter))
          .sort(sortParamsComparator(sortingParams))
          .map(({ id, text, complete, level, priority }) => (
            <Todo
              key={id}
              id={id}
              text={text}
              complete={complete}
              onCompleteToggle={onCompleteTodoToggle}
              onRemove={onRemoveTodo}
              level={level}
              priority={priority}
              onLevelChange={onLevelChange}
              onPriorityChange={onPriorityChange}
            />
          ))
      : null}
  </ListGroup>
);
