import React from "react";
import { Modal, Button } from "react-bootstrap";
import { TextArea } from "components/text-area";
import { formatDate } from "utils";
import { INFO_BUTTON_MODAL_NAME } from "./constants";

export const InfoButtonModal = ({ params, closeModal }) => {
  const { id, text } = params;
  const onClose = () => closeModal(INFO_BUTTON_MODAL_NAME);
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
        <Modal.Title id="contained-modal-title-vcenter">
          {text} {formatDate(id)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Description</h4>
        <TextArea onSave={console.log} />
        <h4>Time control</h4>
        <p>Set deadline</p>
        <p>Estimate time</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
