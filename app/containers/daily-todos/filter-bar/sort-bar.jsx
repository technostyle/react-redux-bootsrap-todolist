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

export const SortBar = ({
  onLevelSort,
  onPrioritySort,
  onDateSort,
  sortingParams
}) => {
  const { type, incrDecr } = sortingParams || {};
  return (
    <Navbar>
      <ButtonToolbar className="mb-2" aria-label="Toolbar with Button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button size="sm" variant="outline-secondary" onClick={onDateSort}>
            {type === SORTING_TYPES.DATE && <Arrow incrDecr={incrDecr} />}
            Date
          </Button>
          <Button size="sm" variant="outline-secondary" onClick={onLevelSort}>
            {type === SORTING_TYPES.LEVEL && <Arrow incrDecr={incrDecr} />}
            Level
          </Button>
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={onPrioritySort}
          >
            {type === SORTING_TYPES.PRIORITY && <Arrow incrDecr={incrDecr} />}
            Priority
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Navbar>
  );
};
