import React from "react";

export type LineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    className: string;
  }>;

const Line: React.FC<React.PropsWithChildren<LineProps>> = ({
  className,
  ...restProps
}) => {
  return <div className={className} {...restProps} />;
};
export { Line };
