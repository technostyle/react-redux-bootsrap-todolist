import { MODAL_ACTIONS } from "./reducer";

export const openModal = ({ modalName, props, onClose }) => ({
  type: MODAL_ACTIONS.OPEN_MODAL,
  payload: { modalName, props, onClose }
});

export const closeModal = modalName => ({
  type: MODAL_ACTIONS.CLOSE_MODAL,
  payload: modalName
});
