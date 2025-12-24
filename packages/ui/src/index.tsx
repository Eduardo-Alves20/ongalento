import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => (
  <button type="button" {...props}>
    {label}
  </button>
);
