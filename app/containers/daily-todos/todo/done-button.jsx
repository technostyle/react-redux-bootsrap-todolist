import React from "react";
import Button from "react-bootstrap/Button";

export const DoneButton = ({ onClick }) => (
  <Button variant="outline-success" size="sm" onClick={onClick}>
    done
  </Button>
);
