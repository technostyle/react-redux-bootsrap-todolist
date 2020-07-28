import React from "react";
import { isUrl, formatUrl } from "utils";

export const TextOrLink = ({ text }) =>
  isUrl(text) ? (
    <a target="_blank" rel="noopener noreferrer" href={text}>
      {formatUrl(text)}
    </a>
  ) : (
    <span>{text}</span>
  );
