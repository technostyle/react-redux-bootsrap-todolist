import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
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
            <Col md={6}>{text}</Col>
            <Col md={2}>
              {complete ? (
                <Button
                  variant="outline-warning"
                  size="sm"
                  onClick={this.onCompleteToggle}
                >
                  undo
                </Button>
              ) : (
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={this.onCompleteToggle}
                >
                  done
                </Button>
              )}
            </Col>
            <Col md={2}>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={this.onRemove}
              >
                remove
              </Button>
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
