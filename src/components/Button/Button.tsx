import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import css from "./index.module.css";
import cn from "classnames";

type Props = {
  variant: "green" | "grey";
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ variant, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(
        css.btn,
        variant === "green" && css.green,
        variant === "grey" && css.grey
      )}
    >
      {children}
    </button>
  );
};

export default Button;
