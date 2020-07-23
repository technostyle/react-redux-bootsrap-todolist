import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OneToTenSelect } from "components/one-to-ten-select";
import { Input } from "components/input";
import { UndoButton } from "./undo-button";
import { DoneButton } from "./done-button";
import { RemoveButton } from "./remove-button";
import { EditButton } from "./edit-button";

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
    this.onRemove = this.onRemove.bind(this);
    this.onCompleteToggle = this.onCompleteToggle.bind(this);
    this.onPriorityChange = this.onPriorityChange.bind(this);
    this.onLevelChange = this.onLevelChange.bind(this);
    this.onEditToggle = this.onEditToggle.bind(this);
    this.onEditStart = this.onEditStart.bind(this);
    this.onTodoUpdate = this.onTodoUpdate.bind(this);
  }

  onCompleteToggle(event) {
    event.preventDefault();
    this.props.onCompleteToggle(this.props.id);
  }

  onRemove(event) {
    event.preventDefault();
    this.props.onRemove(this.props.id);
  }

  onPriorityChange(value) {
    this.props.onPriorityChange(this.props.id, value);
  }

  onLevelChange(value) {
    this.props.onLevelChange(this.props.id, value);
  }

  onEditStart() {
    if (this.state.editing) {
      return;
    }
    this.setState({ editing: true });
  }

  onEditToggle() {
    this.setState({ editing: !this.state.editing });
  }

  onTodoUpdate(text) {
    this.props.onTodoUpdate(this.props.id, text);
    this.setState({ editing: false });
  }

  render() {
    const { text, complete, level, priority } = this.props;
    const { editing } = this.state;

    return (
      <ListGroup.Item variant={complete ? "success" : "light"}>
        <Container>
          <Row>
            <Col md={4} onClick={this.onEditStart}>
              {editing ? (
                <Input onEnter={this.onTodoUpdate} placeholder={text} />
              ) : (
                text
              )}
            </Col>
            <Col md={1}>
              {complete ? (
                <UndoButton onClick={this.onCompleteToggle} />
              ) : (
                <DoneButton onClick={this.onCompleteToggle} />
              )}
            </Col>
            <Col md={1}>
              <EditButton onClick={this.onEditToggle} />
            </Col>
            <Col md={2}>
              <RemoveButton onClick={this.onRemove} />
            </Col>
            <Col md={2}>
              <OneToTenSelect
                icon="trophy"
                value={level}
                onChange={this.onLevelChange}
              />
            </Col>
            <Col md={2}>
              <OneToTenSelect
                icon="lightning"
                value={priority}
                onChange={this.onPriorityChange}
              />
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.any,
  text: PropTypes.string,
  complete: PropTypes.bool,
  onCompleteToggle: PropTypes.func,
  onRemove: PropTypes.func,
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  priority: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onLevelChange: PropTypes.func,
  onPriorityChange: PropTypes.func,
  onTodoUpdate: PropTypes.func
};
