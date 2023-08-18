import React from "react";

export type ListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    className: string;
    orientation: string;
  }>;

const List: React.FC<React.PropsWithChildren<ListProps>> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};
export { List };
