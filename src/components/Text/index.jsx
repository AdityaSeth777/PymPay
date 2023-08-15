import React from "react";

const sizeClasses = {
  txtInterMedium18Bluegray400: "font-inter font-medium",
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold22Bluegray800: "font-inter font-semibold",
  txtInterBold25: "font-bold font-inter",
  txtInterSemiBold25: "font-inter font-semibold",
  txtInterRegular12WhiteA700: "font-inter font-normal",
  txtInterMedium15Bluegray400: "font-inter font-medium",
  txtInterSemiBold28: "font-inter font-semibold",
  txtInterRegular15Bluegray400: "font-inter font-normal",
  txtLatoRegular12: "font-lato font-normal",
  txtInterMedium15Indigo500: "font-inter font-medium",
  txtInterRegular12Bluegray400: "font-inter font-normal",
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular16Bluegray900: "font-inter font-normal",
  txtInterRegular16Bluegray400: "font-inter font-normal",
  txtInterMedium16Green600: "font-inter font-medium",
  txtInterMedium13: "font-inter font-medium",
  txtInterBold15: "font-bold font-inter",
  txtInterMedium16BlueA700: "font-inter font-medium",
  txtInterSemiBold20Bluegray900: "font-inter font-semibold",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium16Indigo600: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium17: "font-inter font-medium",
  txtInterMedium16Red700: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold17: "font-inter font-semibold",
  txtInterMedium15: "font-inter font-medium",
  txtInterSemiBold22: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterMedium16Bluegray400: "font-inter font-medium",
  txtInterRegular15: "font-inter font-normal",
  txtInterMedium16Bluegray900: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtInterBold16Indigo600: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
