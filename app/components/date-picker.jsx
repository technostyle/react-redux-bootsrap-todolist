import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, Button } from "react-bootstrap";
import { Lock } from "react-bootstrap-icons";

import "react-datepicker/dist/react-datepicker.css";

export const MyDatePicker = ({ onSelect, initialDate }) => {
  const [date, setDate] = useState(initialDate && new Date(initialDate));
  const onChange = date => setDate(date);
  const selectDate = () => onSelect(date);
  return (
    <>
      <Col md={3}>
        <DatePicker
          selected={date}
          onChange={onChange}
          dateFormat="MMMM d, yyyy"
          className="form-control"
        />
      </Col>
      <Col>
        <Button variant="outline-primary" onClick={selectDate}>
          {" "}
          <Lock size={20} />{" "}
        </Button>
      </Col>
    </>
  );
};
