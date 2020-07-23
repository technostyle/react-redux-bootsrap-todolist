import React from "react";
import Button from "react-bootstrap/Button";
import { X } from "react-bootstrap-icons";

export const RemoveButton = ({ onClick }) => (
  <Button variant="outline-danger" size="sm" onClick={onClick}>
    <X size={25} />
  </Button>
);
