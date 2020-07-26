import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const TextArea = ({ onSave, initialText }) => {
  const [text, setText] = useState(initialText);

  const onTextChange = event => setText(event.target.value);
  const saveText = () => onSave(text);

  return (
    <Form>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows="3"
          value={text}
          onChange={onTextChange}
        />
      </Form.Group>
      <Button variant="outline-primary" onClick={saveText}>
        Save
      </Button>
    </Form>
  );
};
