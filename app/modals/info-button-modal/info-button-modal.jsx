import React from "react";
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

const ICON_SIZE = 25;

export const InfoButtonModal = ({ params, closeModal, addDescription }) => {
  const { id, text, description } = params;
  const onClose = () => closeModal(INFO_BUTTON_MODAL_NAME);
  const onDescriptionSave = description => {
    addDescription(id, description);
  };

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
              <MyDatePicker onSelect={console.log} startDate={Date.now()} />
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <HourglassBottom size={ICON_SIZE} />
                Deadline:
              </Col>
              <MyDatePicker onSelect={console.log} startDate={Date.now()} />
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <HourglassSplit size={ICON_SIZE} />
                Estimate:
              </Col>
              <Col md={3}>no estimate set</Col>
              <Col md={3}>
                <Input onEnter={console.log} placeholder="3w 2d 14h 43m" />
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <ClockFill size={ICON_SIZE} /> Work log:
              </Col>
              <Col md={3}>no work logged</Col>
              <Col md={3}>
                <Input onEnter={console.log} placeholder="3w 2d 14h 43m" />
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
        <h4>Description</h4>
        <TextArea initialText={description} onSave={onDescriptionSave} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
