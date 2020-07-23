import React from "react";
import Button from "react-bootstrap/Button";
import { Check } from "react-bootstrap-icons";

export const UndoButton = ({ onClick }) => (
  <Button variant="outline-warning" size="sm" onClick={onClick}>
    <Check size={20} />
  </Button>
);
