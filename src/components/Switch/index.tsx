import React from "react";
import SwitchProvider from "@dhiwise/react-switch";
import { ErrorMessage } from "../../components/ErrorMessage";

export type SwitchProps = Partial<{
  onColor: string;
  offColor: string;
  onHandleColor: string;
  offHandleColor: string;
  value: string | boolean;
  className: string;
  checkedIcon: React.ReactNode;
  uncheckedIcon: React.ReactNode;
  errors: any[];
  onChange: Function;
}>;

const Switch: React.FC<SwitchProps> = ({
  onChange,

  onColor = "",
  offColor = "",
  onHandleColor = "",
  offHandleColor = "",
  value = false,
  className = "",
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  errors = [],
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };

  return (
    <>
      <SwitchProvider
        className={`${className}`}
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
    </>
  );
};

export { Switch };
