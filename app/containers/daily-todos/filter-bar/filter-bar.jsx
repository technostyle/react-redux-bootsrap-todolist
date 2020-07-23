import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StatusFilter } from "./status-filter";
import { SortBar } from "./sort-bar";

export const FilterBar = ({
  activeFilter,
  onFilterChange,
  onLevelSort,
  onPrioritySort,
  onDateSort,
  sortingParams
}) => (
  <Container>
    <Row>
      <Col>
        <StatusFilter
          activeFilter={activeFilter}
          onFilterChange={onFilterChange}
        />
      </Col>
      <Col>
        <SortBar
          onLevelSort={onLevelSort}
          onPrioritySort={onPrioritySort}
          onDateSort={onDateSort}
          sortingParams={sortingParams}
        />
      </Col>
    </Row>
  </Container>
);
