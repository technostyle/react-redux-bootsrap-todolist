import React from "react";
import Button from "react-bootstrap/Button";

export const UndoButton = ({ onClick }) => (
  <Button variant="outline-warning" size="sm" onClick={onClick}>
    undo
  </Button>
);
