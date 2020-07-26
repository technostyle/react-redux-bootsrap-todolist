import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Clock, HourglassTop, HourglassBottom } from "react-bootstrap-icons";
import { TextArea } from "components/text-area";
import { formatDate } from "utils";
import { INFO_BUTTON_MODAL_NAME } from "./constants";

const ICON_SIZE = 20;

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
      size="sm"
      scrollable
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Time control</h4>
        <p>
          <Clock size={ICON_SIZE} /> Creation time: {formatDate(id)}
        </p>
        {/*<p>*/}
        {/*  <HourglassBottom size={ICON_SIZE} />*/}
        {/*  Deadline:{" "}*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*  <HourglassTop size={ICON_SIZE} />*/}
        {/*  Estimate:{" "}*/}
        {/*</p>*/}
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
