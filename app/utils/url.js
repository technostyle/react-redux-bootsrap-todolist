import { isString } from "lodash";

const URL_PREFIX = "http://";
const URL_SECURE_PREFIX = "https://";

const isHttpString = string =>
  isString(string) && string.slice(0, 7) === URL_PREFIX;
const isHttpsString = string =>
  isString(string) && string.slice(0, 8) === URL_SECURE_PREFIX;
export const isUrl = string => isHttpString(string) || isHttpsString(string);

export const formatUrl = string =>
  isHttpsString(string) ? string.slice(8) : string.slice(7);
