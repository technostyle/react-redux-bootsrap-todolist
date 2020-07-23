import React from "react";
import Button from "react-bootstrap/Button";
import { Check } from "react-bootstrap-icons";

export const DoneButton = ({ onClick }) => (
  <Button variant="outline-success" size="sm" onClick={onClick}>
    <Check size={25} />
  </Button>
);
