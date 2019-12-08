import { get } from "lodash";

export const equals = to => val => val === to;
export const prop = (path, defaultValue) => obj => get(obj, path, defaultValue);
