import classnames from "classnames";

import classes from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SubmitButton = ({ children, className, type, ...props }: ButtonProps) => {
  return (
    <button
      className={classnames(
        className,
        "px-4 py-1 bg-button text-white rounded-[4px] flex items-end justify-end",
        classes["submit-button"]
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
