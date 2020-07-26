import { notEquals } from "utils";

export const MODAL_ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL"
};

const initialState = {
  openModals: {}
};

const openModal = (state, payload) => {
  const { modalName, props, onClose } = payload;
  const openModals = { ...state.openModals, [modalName]: { props, onClose } };
  return { ...state, openModals };
};

const closeModal = (state, payload) => {
  const openModals = { ...state.openModals };
  delete openModals[payload];
  return { ...state, openModals };
};

export const modalsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_ACTIONS.OPEN_MODAL:
      return openModal(state, payload);
    case MODAL_ACTIONS.CLOSE_MODAL:
      return closeModal(state, payload);
    default:
      return state;
  }
};
