import React from "react";
import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const Switch = ({
  onColor,
  offColor,
  onHandleColor,
  offHandleColor,
  value,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  errors = [],
  onChange,
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={`${className}`}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        onColor={onColor}
        offColor={offColor}
        onHandleColor={onHandleColor}
        offHandleColor={offHandleColor}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
      <ErrorMessage errors={errors} />
    </div>
  );
};

Switch.propTypes = {
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  onHandleColor: PropTypes.string,
  offHandleColor: PropTypes.string,
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  value: false,
  className: "",
  checkedIcon: <></>,
  onChange: () => {},
  uncheckedIcon: <></>,
};

export { Switch };
