import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";

const oneToTenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oneToTenArrayOnStrings = oneToTenArray.map(String);

const getVariant = value => {
  if (1 <= value && value <= 2) {
    return "danger";
  }

  if (3 <= value && value <= 4) {
    return "warning";
  }

  if (5 <= value && value <= 6) {
    return "info";
  }

  if (7 <= value && value <= 8) {
    return "success";
  }

  if (9 <= value && value <= 10) {
    return "secondary";
  }

  return "primary";
};

export class OneToTenSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.onSelectValue = this.onSelectValue.bind(this);
  }

  onSelectValue(value) {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    const { value } = this.state;
    const { label } = this.props;

    return (
      <Dropdown id="one-to-ten-select" onSelect={this.onSelectValue}>
        <Dropdown.Toggle
          variant={getVariant(value)}
          size="sm"
          id="one-to-ten-selected-item"
        >
          {value ? `${label}:  ${value}` : `Set ${label}`}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {oneToTenArray.map(value => (
            <Dropdown.Item eventKey={value} key={value}>
              {value}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

OneToTenSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOf([...oneToTenArray, ...oneToTenArrayOnStrings]),
  onSelect: PropTypes.func
};
