import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import FlipMove from "react-flip-move";
import { filterTodoCreator, sortParamsComparator } from "./utils";
import { Todo } from "../todo";

export const List = ({
  dailyTodos,
  activeFilter,
  onCompleteTodoToggle,
  onRemoveTodo,
  onTodoUpdate,
  onLevelChange,
  onPriorityChange,
  onSubTaskAdd,
  sortingParams,
  onSubTaskCompleteToggle,
  onSubTaskRemove
}) => (
  <ListGroup>
    <FlipMove>
      {dailyTodos.length
        ? dailyTodos
            .filter(filterTodoCreator(activeFilter))
            .sort(sortParamsComparator(sortingParams))
            .map(({ id, text, complete, subTaskList, level, priority }) => (
              <Todo
                key={id}
                id={id}
                text={text}
                complete={complete}
                onCompleteToggle={onCompleteTodoToggle}
                onRemove={onRemoveTodo}
                onTodoUpdate={onTodoUpdate}
                level={level}
                priority={priority}
                onLevelChange={onLevelChange}
                onPriorityChange={onPriorityChange}
                onSubTaskAdd={onSubTaskAdd}
                subTaskList={subTaskList}
                onSubTaskCompleteToggle={onSubTaskCompleteToggle}
                onSubTaskRemove={onSubTaskRemove}
              />
            ))
        : null}
    </FlipMove>
  </ListGroup>
);
