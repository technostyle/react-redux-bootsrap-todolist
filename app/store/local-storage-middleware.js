import { writeState } from "data-handler";

export const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const returnValue = next(action);
    writeState(getState());
    return returnValue;
  };
};
