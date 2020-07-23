import React from "react";
import { ListGroupItem, Container, Row, Col } from "react-bootstrap";
import { DoneButton } from "./done-button";
import { UndoButton } from "./undo-button";
import { RemoveButton } from "./remove-button";

export const SubTask = ({
  taskId,
  subTaskId,
  text,
  complete,
  onSubTaskCompleteToggle,
  onSubTaskRemove
}) => {
  const onCompleteToggle = () => onSubTaskCompleteToggle(taskId, subTaskId);
  const onRemove = () => onSubTaskRemove(taskId, subTaskId);
  return (
    <ListGroupItem variant={complete ? "success" : "light"}>
      <Container>
        <Row>
          <Col> {text} </Col>
          <Col>
            {" "}
            {complete ? (
              <UndoButton onClick={onCompleteToggle} />
            ) : (
              <DoneButton onClick={onCompleteToggle} />
            )}{" "}
          </Col>
          <Col>
            <RemoveButton onClick={onRemove} />
          </Col>
        </Row>
      </Container>
    </ListGroupItem>
  );
};
