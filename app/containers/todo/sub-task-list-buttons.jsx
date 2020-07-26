import React from "react";
import Button from "react-bootstrap/Button";
import { ChevronDown, ChevronUp, Diagram3 } from "react-bootstrap-icons";

const Chevron = ({ isOpen }) =>
  isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />;

export const SubTaskListButton = ({ hasSubTask, onClick, isOpen }) => (
  <Button
    variant={hasSubTask ? "outline-secondary" : ""}
    size="sm"
    onClick={onClick}
    aria-controls="subtask-collapse"
    aria-expanded={isOpen}
  >
    {hasSubTask ? (
      <Chevron isOpen={isOpen} />
    ) : (
      <Diagram3 size={20} color="grey" />
    )}
  </Button>
);
