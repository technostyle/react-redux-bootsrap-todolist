import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { OneToTenSelect } from "components/one-to-ten-select";
import { Input } from "components/input";
import { UndoButton } from "./undo-button";
import { DoneButton } from "./done-button";
import { RemoveButton } from "./remove-button";
import { EditButton } from "./edit-button";
import { InfoButton } from "./info-button";
import { SubTaskListButton } from "./sub-task-list-buttons";
import { SubTaskList } from "./sub-task-list";
import { INFO_BUTTON_MODAL_NAME } from "modals/info-button-modal/constants";
import { TextOrLink } from "components/text-or-link";

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, subTaskListOpen: false };
    this.onRemove = this.onRemove.bind(this);
    this.onCompleteToggle = this.onCompleteToggle.bind(this);
    this.onPriorityChange = this.onPriorityChange.bind(this);
    this.onLevelChange = this.onLevelChange.bind(this);
    this.onEditToggle = this.onEditToggle.bind(this);
    this.onEditStart = this.onEditStart.bind(this);
    this.onTodoUpdate = this.onTodoUpdate.bind(this);
    this.onSubTaskListToggle = this.onSubTaskListToggle.bind(this);
    this.onSubTaskAdd = this.onSubTaskAdd.bind(this);
    this.onInfoModalOpen = this.onInfoModalOpen.bind(this);
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

  onSubTaskListToggle() {
    this.setState({ subTaskListOpen: !this.state.subTaskListOpen });
  }

  onSubTaskAdd(text) {
    this.props.onSubTaskAdd(this.props.id, text);
  }

  onInfoModalOpen() {
    const {
      id,
      text,
      complete,
      level,
      priority,
      description,
      subTaskList,
      startDay,
      deadline,
      estimate,
      workLog,
      onModalOpen
    } = this.props;
    onModalOpen({
      modalName: INFO_BUTTON_MODAL_NAME,
      props: {
        id,
        text,
        complete,
        level,
        priority,
        description,
        subTaskList,
        startDay,
        deadline,
        estimate,
        workLog
      }
    });
  }

  render() {
    const {
      id,
      text,
      complete,
      level,
      priority,
      subTaskList,
      onSubTaskCompleteToggle,
      onSubTaskRemove
    } = this.props;
    const { editing, subTaskListOpen } = this.state;

    return (
      <ListGroup.Item variant={complete ? "success" : "light"}>
        <Container>
          <Row>
            <Col md={1}>
              <SubTaskListButton
                hasSubTask={!!get(subTaskList, "length")}
                isOpen={subTaskListOpen}
                onClick={this.onSubTaskListToggle}
              />
            </Col>
            <Col md={3} onClick={this.onEditStart}>
              {editing ? (
                <Input onEnter={this.onTodoUpdate} placeholder={text} />
              ) : (
                <TextOrLink text={text} />
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
            <Col md={1}>
              <RemoveButton onClick={this.onRemove} />
            </Col>
            <Col md={1}>
              <InfoButton onClick={this.onInfoModalOpen} />
            </Col>
            <Col md={3}>
              <ButtonGroup>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id={"level-select-tooltip"}>Level</Tooltip>}
                >
                  <OneToTenSelect
                    icon="trophy"
                    value={level}
                    onChange={this.onLevelChange}
                  />
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id={"level-select-tooltip"}>Priority</Tooltip>
                  }
                >
                  <OneToTenSelect
                    icon="lightning"
                    value={priority}
                    onChange={this.onPriorityChange}
                  />
                </OverlayTrigger>
              </ButtonGroup>
            </Col>
          </Row>

          <SubTaskList
            isOpen={subTaskListOpen}
            taskId={id}
            onSubTaskInput={this.onSubTaskAdd}
            subTaskList={subTaskList || []}
            onSubTaskCompleteToggle={onSubTaskCompleteToggle}
            onSubTaskRemove={onSubTaskRemove}
          />
        </Container>
      </ListGroup.Item>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.any,
  text: PropTypes.string,
  description: PropTypes.string,
  complete: PropTypes.bool,
  onCompleteToggle: PropTypes.func,
  onRemove: PropTypes.func,
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  priority: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onLevelChange: PropTypes.func,
  onPriorityChange: PropTypes.func,
  onTodoUpdate: PropTypes.func,
  onSubTaskAdd: PropTypes.func,
  subTaskList: PropTypes.any,
  onSubTaskCompleteToggle: PropTypes.func,
  onSubTaskRemove: PropTypes.func,
  onModalOpen: PropTypes.func
};
