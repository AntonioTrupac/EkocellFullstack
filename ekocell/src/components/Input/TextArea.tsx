import type { IFormValue } from "@components/Form/Form";
import type { TextareaHTMLAttributes } from "react";
import type { Path, UseFormRegister, ValidationRule } from "react-hook-form";

import classes from "./Input.module.scss";

type OmitTextAreaElement = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "required"
>;

interface TextAreaProps extends OmitTextAreaElement {
  className?: string;
  register: UseFormRegister<IFormValue>;
  name: Path<Pick<IFormValue, "upit">>;
  required?: boolean | ValidationRule<boolean>;
}

const TextArea = ({
  register,
  name,
  required,
  className,
  placeholder,
  rows = 3,
  ...props
}: TextAreaProps) => {
  return (
    <label className={className}>
      <span className="text-label mb-1">{placeholder}</span>
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={classes.input}
        {...register(name, { required })}
        {...props}
      />
    </label>
  );
};

export default TextArea;
