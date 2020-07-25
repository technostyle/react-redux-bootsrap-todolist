import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Input } from "components/input";
import { Collapse, ListGroup } from "react-bootstrap";
import { SubTask } from "./sub-task";

export const SubTaskList = ({
  isOpen,
  taskId,
  onSubTaskInput,
  subTaskList,
  onSubTaskCompleteToggle,
  onSubTaskRemove
}) => {
  return (
    <Collapse in={isOpen}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Input onEnter={onSubTaskInput} placeholder="input subtask" />
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={8}>
            <ListGroup>
              {subTaskList.map(({ text, id, complete }) => (
                <SubTask
                  key={id}
                  taskId={taskId}
                  subTaskId={id}
                  text={text}
                  complete={complete}
                  onSubTaskCompleteToggle={onSubTaskCompleteToggle}
                  onSubTaskRemove={onSubTaskRemove}
                />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Collapse>
  );
};
