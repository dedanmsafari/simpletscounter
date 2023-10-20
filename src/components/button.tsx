import { ComponentProps } from "react";
import clsx from "clsx";
type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const Button = ({ variant, className, ...otherprops }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "button",
        variant === "secondary" ? "btn btn-secondary" : "btn btn-primary",
        className
      )}
      {...otherprops}
    />
  );
};

export default Button;
