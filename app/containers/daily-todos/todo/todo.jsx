import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OneToTenSelect } from "components/one-to-ten-select";
import { UndoButton } from "./undo-button";
import { DoneButton } from "./done-button";
import { RemoveButton } from "./remove-button";

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
    this.onCompleteToggle = this.onCompleteToggle.bind(this);
  }

  onCompleteToggle(event) {
    event.preventDefault();
    this.props.onCompleteToggle(this.props.id);
  }

  onRemove(event) {
    event.preventDefault();
    this.props.onRemove(this.props.id);
  }

  render() {
    const { id, text, complete } = this.props;

    return (
      <ListGroup.Item variant={complete ? "success" : "light"}>
        <Container>
          <Row>
            <Col md={3}>{text}</Col>
            <Col md={2}>
              {complete ? (
                <UndoButton onClick={this.onCompleteToggle} />
              ) : (
                <DoneButton onClick={this.onCompleteToggle} />
              )}
            </Col>
            <Col md={2}>
              <RemoveButton onClick={this.onRemove} />
            </Col>
            <Col md={2}>
              <OneToTenSelect label="Lvl" value={1} onChange={console.log} />
            </Col>
            <Col md={2}>
              <OneToTenSelect label="Imp" value={1} onChange={console.log} />
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.any,
  text: PropTypes.string,
  complete: PropTypes.bool,
  onCompleteToggle: PropTypes.func,
  onRemove: PropTypes.func
};
