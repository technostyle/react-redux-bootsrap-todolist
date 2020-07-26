import { get } from "lodash";

export const equals = to => value => value === to;
export const notEquals = to => value => value !== to;

export const prop = (path, defaultValue) => obj => get(obj, path, defaultValue);

export const updateInArrayById = ({ array, itemId, itemUpdate = {} }) =>
  array.map(item => {
    if (item.id !== itemId) {
      return item;
    }

    return { ...item, ...itemUpdate };
  });
