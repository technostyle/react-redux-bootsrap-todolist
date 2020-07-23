import React from "react";
import Button from "react-bootstrap/Button";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

export const SubTaskListButton = ({ onClick, isOpen }) => (
  <Button variant="secondary-outline" size="sm" onClick={onClick}>
    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
  </Button>
);
