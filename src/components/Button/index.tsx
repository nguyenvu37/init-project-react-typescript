import React from 'react';
import { IButtonProps } from './../../ultils/types';

export const Button = ({ handleClick, text, customClass = 'btn-secondary' }: IButtonProps) => {
  return (
    <>
      <button onClick={handleClick} className={`btn ${customClass}`}>
        {text}
      </button>
    </>
  );
};
