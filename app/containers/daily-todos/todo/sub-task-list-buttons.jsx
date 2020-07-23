import React from "react";
import Button from "react-bootstrap/Button";
import { ChevronDown, ChevronUp, Plus } from "react-bootstrap-icons";

const Chevron = ({ isOpen }) =>
  isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />;

export const SubTaskListButton = ({ hasSubTask, onClick, isOpen }) => (
  <Button
    variant={hasSubTask ? "outline-secondary" : ""}
    size="sm"
    onClick={onClick}
  >
    {hasSubTask ? <Chevron isOpen={isOpen} /> : <Plus size={20} color="blue" />}
  </Button>
);
