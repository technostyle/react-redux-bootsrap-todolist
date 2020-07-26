import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import {
  ExclamationCircle,
  LightningFill,
  Trophy,
  Bricks
} from "react-bootstrap-icons";

const oneToTenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oneToTenArrayOnStrings = oneToTenArray.map(String);

const ICON_SIZE = 15;
const Icon = ({ icon }) => {
  switch (icon) {
    case "exclamation":
      return <ExclamationCircle size={20} />;
    case "lightning":
      return <LightningFill size={ICON_SIZE} />;
    case "trophy":
      return <Trophy size={ICON_SIZE} />;
    case "bricks":
      return <Bricks size={ICON_SIZE} />;
    default:
      return null;
  }
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
    const { icon } = this.props;

    return (
      //  ...this.props is for react-bootstrap tooltip
      <Dropdown
        id="one-to-ten-select"
        onSelect={this.onSelectValue}
        {...this.props}
      >
        <Dropdown.Toggle
          variant={value ? "outline-dark" : "outline-secondary"}
          size="sm"
          id="one-to-ten-selected-item"
        >
          <Icon icon={icon} /> {value || null}
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
  onSelect: PropTypes.func,
  icon: PropTypes.oneOf(["exclamation", "lightning", "trophy", "bricks"])
};
