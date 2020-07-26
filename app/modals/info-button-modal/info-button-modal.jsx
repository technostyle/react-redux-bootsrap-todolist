import React, { useState } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import {
  Clock,
  ClockFill,
  HourglassSplit,
  HourglassTop,
  HourglassBottom
} from "react-bootstrap-icons";
import { TextArea } from "components/text-area";
import { Input } from "components/input";
import { MyDatePicker } from "components/date-picker";
import { formatDate } from "utils";
import { INFO_BUTTON_MODAL_NAME } from "./constants";
import { ResetButton } from "./reset-button";

const ICON_SIZE = 25;

export const InfoButtonModal = ({
  params,
  closeModal,
  addDescription,
  setStartDay,
  setDeadline,
  setEstimate,
  setWorkLog
}) => {
  const {
    id,
    text,
    description,
    startDay,
    deadline,
    estimate,
    workLog
  } = params;

  const onClose = () => closeModal(INFO_BUTTON_MODAL_NAME);

  const [descriptionState, setDescriptionState] = useState(description);
  const [estimateState, setEstimateState] = useState(estimate);
  const [workLogState, setWorkLogState] = useState(workLog);

  const onDescriptionChange = description => {
    setDescriptionState(description);
    addDescription(id, description);
  };
  const onEstimateChange = estimate => {
    setEstimateState(estimate);
    setEstimate(id, estimate);
  };
  const onEstimateReset = () => onEstimateChange(null);
  const onWorkLogChange = workLog => {
    setWorkLogState(workLog);
    setWorkLog(id, workLog);
  };
  const onWorkLogReset = () => onWorkLogChange(null);

  const onStartDaySet = startDay => setStartDay(id, startDay);
  const onDeadlineSet = deadline => setDeadline(id, deadline);

  return (
    <Modal
      show={!!id}
      onHide={onClose}
      size="lg"
      scrollable
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Time control</h4>
        <ListGroup>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <Clock size={ICON_SIZE} /> Creation time:
              </Col>
              <Col md={3}>{formatDate(id)}</Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <HourglassTop size={ICON_SIZE} />
                Start day:
              </Col>
              <MyDatePicker onSelect={onStartDaySet} initialDate={startDay} />
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <HourglassBottom size={ICON_SIZE} />
                Deadline:
              </Col>
              <MyDatePicker onSelect={onDeadlineSet} initialDate={deadline} />
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <HourglassSplit size={ICON_SIZE} />
                Estimate:
              </Col>
              <Col md={3}>{estimateState}</Col>
              <Col md={3}>
                <Input onEnter={onEstimateChange} placeholder="5m 3w 2d 14h" />
              </Col>
              <Col md={1}>
                <ResetButton onClick={onEstimateReset} />
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <ClockFill size={ICON_SIZE} /> Work log:
              </Col>
              <Col md={3}>{workLogState}</Col>
              <Col md={3}>
                <Input onEnter={onWorkLogChange} placeholder="5m 3w 2d 14h" />
              </Col>
              <Col md={1}>
                <ResetButton onClick={onWorkLogReset} />
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
        <h4>Description</h4>
        <TextArea initialText={descriptionState} onSave={onDescriptionChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
