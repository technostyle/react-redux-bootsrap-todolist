import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StatusFilter } from "containers/filter-sort-bar/status-filter";
import { SortBar } from "containers/filter-sort-bar/sort-bar";

export const FilterSortBar = () => (
  <Container>
    <Row>
      <Col>
        <StatusFilter />
      </Col>
      <Col>
        <SortBar />
      </Col>
    </Row>
  </Container>
);
