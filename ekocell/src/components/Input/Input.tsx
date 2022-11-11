import type { IFormValue } from "@components/Form/Form";
import type { InputHTMLAttributes } from "react";
import type { Path, UseFormRegister, ValidationRule } from "react-hook-form";

import classes from "./Input.module.scss";

type OmitInputElement = Omit<InputHTMLAttributes<HTMLInputElement>, "required">;

interface InputProps extends OmitInputElement {
  className?: string;
  register: UseFormRegister<IFormValue>;
  name: Path<Omit<IFormValue, "upit">>;
  required?: boolean | ValidationRule<boolean>;
}

const Input = ({
  register,
  name,
  required,
  className,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <label htmlFor={name} className={className}>
      <span className="text-label mb-1">{placeholder}</span>
      <input
        placeholder={placeholder}
        className={classes.input}
        {...register(name, { required })}
        {...props}
      />
    </label>
  );
};

export default Input;
