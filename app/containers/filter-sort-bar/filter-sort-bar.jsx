import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { StatusFilter } from "containers/filter-sort-bar/status-filter";
import { SortBar } from "containers/filter-sort-bar/sort-bar";
import { TodaySwitchFilter } from "./today-switch-filter";

export const FilterSortBar = () => (
  <Container>
    <Row>
      <Col>
        <StatusFilter />
      </Col>
      <Col>
        <SortBar />
      </Col>
      <Col>
        <TodaySwitchFilter />
      </Col>
    </Row>
  </Container>
);
