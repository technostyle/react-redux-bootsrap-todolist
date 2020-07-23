import React from "react";
import Button from "react-bootstrap/Button";
import { Trash } from "react-bootstrap-icons";

export const RemoveButton = ({ onClick }) => (
  <Button variant="outline-danger" size="sm" onClick={onClick}>
    <Trash size={20} />
  </Button>
);
