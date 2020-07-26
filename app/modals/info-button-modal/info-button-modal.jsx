import React from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Jumbotron
} from "react-bootstrap";
import {
  Egg,
  HourglassSplit,
  HourglassTop,
  HourglassBottom
} from "react-bootstrap-icons";
import { TextArea } from "components/text-area";
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
              <Col>
                <Egg size={ICON_SIZE} /> Creation time:
              </Col>
              <Col>{formatDate(id)}</Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                <HourglassTop size={ICON_SIZE} />
                Start day:
              </Col>
              <MyDatePicker onSelect={console.log} startDate={Date.now()} />
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                <HourglassBottom size={ICON_SIZE} />
                Deadline:
              </Col>
              <MyDatePicker onSelect={console.log} startDate={Date.now()} />
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                <HourglassSplit size={ICON_SIZE} />
                Estimate:
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
