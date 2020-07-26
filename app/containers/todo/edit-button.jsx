import React from "react";
import Button from "react-bootstrap/Button";
import { Pencil } from "react-bootstrap-icons";

export const EditButton = ({ onClick }) => (
  <Button variant="outline-secondary" size="sm" onClick={onClick}>
    <Pencil size={20} />
  </Button>
);
