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
            .map(
              ({
                id,
                text,
                complete,
                subTaskList,
                level,
                priority,
                description,
                startDay,
                deadline,
                estimate,
                workLog
              }) => (
                <Todo
                  key={id}
                  id={id}
                  text={text}
                  complete={complete}
                  startDay={startDay}
                  level={level}
                  priority={priority}
                  description={description}
                  subTaskList={subTaskList}
                  deadline={deadline}
                  estimate={estimate}
                  workLog={workLog}
                  onCompleteToggle={toggleComplete}
                  onRemove={removeTodo}
                  onTodoUpdate={updateTodo}
                  onLevelChange={setTodoLevel}
                  onPriorityChange={setTodoPriority}
                  onModalOpen={openModal}
                  onSubTaskAdd={addSubTask}
                  onSubTaskCompleteToggle={toggleCompleteSubTask}
                  onSubTaskRemove={removeSubTask}
                />
              )
            )
        : null}
    </FlipMove>
  </ListGroup>
);
