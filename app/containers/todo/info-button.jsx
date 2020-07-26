import React from "react";
import Button from "react-bootstrap/Button";
import { Info } from "react-bootstrap-icons";

export const InfoButton = ({ onClick }) => (
  <Button variant="outline-info" size="sm" onClick={onClick}>
    <Info size={20} />
  </Button>
);
