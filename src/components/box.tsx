//Box element with polymorphic behaviour
import { ComponentProps, ElementType } from "react";

type BoxProps<E extends ElementType> = Omit<ComponentProps<E>, "as"> & {
  as?: E;
};

const Box = <E extends ElementType = "div">({
  as,
  ...otherProps
}: BoxProps<E>) => {
  const TargetName = as || "div";
  return <TargetName {...otherProps} />;
};

export default Box;
