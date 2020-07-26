import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import FlipMove from "react-flip-move";
import { filterTodoCreator, sortParamsComparator } from "./utils";
import { Todo } from "../todo";

export const TodoList = ({
  dailyTodos,
  activeFilter,
  sortingParams,
  removeTodo,
  updateTodo,
  openModal,
  setTodoLevel,
  setTodoPriority,
  toggleComplete,
  addSubTask,
  toggleCompleteSubTask,
  removeSubTask
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
                onCompleteToggle={toggleComplete}
                onRemove={removeTodo}
                onTodoUpdate={updateTodo}
                level={level}
                priority={priority}
                onLevelChange={setTodoLevel}
                onPriorityChange={setTodoPriority}
                onModalOpen={openModal}
                onSubTaskAdd={addSubTask}
                subTaskList={subTaskList}
                onSubTaskCompleteToggle={toggleCompleteSubTask}
                onSubTaskRemove={removeSubTask}
              />
            ))
        : null}
    </FlipMove>
  </ListGroup>
);
