import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  onKeyDown(event) {
    const isEnter = event.keyCode === 13;
    if (!isEnter) {
      return;
    }

    this.setState({ text: "" });
    this.props.onEnter(event.target.value.trim());
  }

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="input todo"
          value={this.state.text}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
        />
      </InputGroup>
    );
  }
}

Input.propTypes = {
  onEnter: PropTypes.func
};
