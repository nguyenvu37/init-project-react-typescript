import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  customClass?: string;
  innerRef?: null | string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label = '',
  type = 'text',
  customClass = '',
  innerRef = null,
  value,
  handleChange,
  ...rest
}: InputProps) => {
  return (
    <div className={`${customClass} form-group`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        className="form-control"
        ref={innerRef}
        value={value}
        onChange={(e) => handleChange(e)}
        {...rest}
      />
    </div>
  );
};
