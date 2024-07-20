import { VariantProps, cva } from "class-variance-authority";
import { FC, PropsWithChildren } from "react";
import "./Button.scss";

const button = cva("button", {
  variants: {
    intent: {
      filled: "filled",
      transparent: "transparent",
      underline: "underline",
    },
  },
});

interface ButtonProps extends VariantProps<typeof button> {
  className?: string;
}

const Button: FC<ButtonProps & PropsWithChildren> = ({ className, intent, ...props }) => {
  return (
    <button
      className={button({ intent }) + (className ? ` ${className}` : "")}
      {...props}
    />
  );
};

export default Button;
