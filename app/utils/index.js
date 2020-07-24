import { get } from "lodash";

export const prop = (path, defaultValue) => obj => get(obj, path, defaultValue);

const addOToDigit = value => (Number(value) < 10 ? `0${value}` : value);
export const formatDate = id => {
  const date = new Date(id);
  return `${addOToDigit(date.getDate())}/${addOToDigit(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;
};
