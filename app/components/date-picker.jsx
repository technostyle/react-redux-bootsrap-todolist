import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, Button } from "react-bootstrap";
import { Lock } from "react-bootstrap-icons";

import "react-datepicker/dist/react-datepicker.css";

export const MyDatePicker = ({ onSelect, startDate }) => {
  const [date, setDate] = useState(new Date(startDate) || null);
  const onChange = date => setDate(date);
  const selectDate = () => onSelect(date);
  return (
    <>
      <Col>
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
