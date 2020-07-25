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
  setLevelSorting,
  setPrioritySorting,
  setDateSorting,
  sortingParams
}) => {
  const { type, incrDecr } = sortingParams || {};
  return (
    <Navbar>
      <ButtonToolbar className="mb-2" aria-label="Toolbar with Button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={setDateSorting}
          >
            {type === SORTING_TYPES.DATE && <Arrow incrDecr={incrDecr} />}
            Date
          </Button>
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={setLevelSorting}
          >
            {type === SORTING_TYPES.LEVEL && <Arrow incrDecr={incrDecr} />}
            Level
          </Button>
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={setPrioritySorting}
          >
            {type === SORTING_TYPES.PRIORITY && <Arrow incrDecr={incrDecr} />}
            Priority
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Navbar>
  );
};
