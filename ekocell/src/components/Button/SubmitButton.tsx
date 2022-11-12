import classnames from "classnames";

import classes from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "s" | "m";
}

const SubmitButton = ({
  children,
  className,
  size = "m",
  type,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        className,
        "bg-button text-white rounded-[4px] flex items-end justify-end",
        classes["submit-button"],
        [size === "s" && "px-4 py-1"],
        [size === "m" && "px-6 py-2"]
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
