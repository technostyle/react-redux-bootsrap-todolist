import React from "react";
import { Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

export const ResetButton = ({ onClick }) => (
  <Button variant="outline-danger" onClick={onClick}>
    <X size={25}> </X>
  </Button>
);
