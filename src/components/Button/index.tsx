import React from 'react';
import { IButtonProps } from './../../ultils/types';

export const Button = ({ handleClick, text }: IButtonProps) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};
