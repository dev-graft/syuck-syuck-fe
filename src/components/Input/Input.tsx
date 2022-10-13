import React, { forwardRef } from 'react';

export interface InputProps {
  label?: string;
  htmlType?: string;
  name?: string;
  deafautValue?: unknown;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, htmlType = 'text', className = '', style, ...props }, ref) => {
    return <input ref={ref} {...props} />;
  }
);

export default Input;
