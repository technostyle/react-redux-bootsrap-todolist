import { writeState } from "data-handler";

export const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    console.log("before", getState());
    const returnValue = next(action);
    writeState(getState());
    console.log("after", getState());
    return returnValue;
  };
};
