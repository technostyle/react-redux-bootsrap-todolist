import React from "react";
import Button from "react-bootstrap/Button";

export const RemoveButton = ({ onClick }) => (
  <Button variant="outline-danger" size="sm" onClick={onClick}>
    remove
  </Button>
);
