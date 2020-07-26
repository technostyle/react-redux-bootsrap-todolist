import React from "react";
import { Button, ButtonGroup, ButtonToolbar, Navbar } from "react-bootstrap";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import { SORTING_TYPES } from "modules/sort-bar/constants";

const Arrow = ({ incrDecr }) =>
  [SORTING_TYPES.INCR, SORTING_TYPES.DECR].includes(incrDecr) ? (
    incrDecr === SORTING_TYPES.INCR ? (
      <ArrowUp />
    ) : (
      <ArrowDown />
    )
  ) : null;

const buttonLabels = {
  [SORTING_TYPES.DATE]: "Date",
  [SORTING_TYPES.LEVEL]: "Level",
  [SORTING_TYPES.PRIORITY]: "Priority"
};

export const SortBar = ({ setSorting, sortingParams }) => {
  const { type, incrDecr } = sortingParams || {};
  return (
    <Navbar>
      <ButtonToolbar className="mb-2" aria-label="Toolbar with Button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          {[
            SORTING_TYPES.DATE,
            SORTING_TYPES.LEVEL,
            SORTING_TYPES.PRIORITY
          ].map(sortingType => (
            <Button
              key={sortingType}
              size="sm"
              variant="outline-secondary"
              onClick={() => setSorting(sortingType)}
            >
              {type === sortingType && <Arrow incrDecr={incrDecr} />}
              {buttonLabels[sortingType]}
            </Button>
          ))}
        </ButtonGroup>
      </ButtonToolbar>
    </Navbar>
  );
};
