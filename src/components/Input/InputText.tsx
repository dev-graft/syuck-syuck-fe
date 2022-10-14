import React, { forwardRef } from 'react';

import styled from '@emotion/styled';

export const Input = styled.input`
  height: 35px;
  width: 328px;
  padding: 12px 16px;
  margin-bottom: 20px;
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: #eaeaea;
  border: none;
  border-radius: 8px;
`;
export type InputValue = string | number | readonly string[] | undefined;
export interface InputProps {
  label?: string;
  htmlType?: string;
  name?: string;
  id?: string;
  deafautValue?: unknown;
  value?: InputValue;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  error?: boolean;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ label, htmlType = 'text', className = '', style, error = false, ...props }, ref) => {
    return <Input ref={ref} {...props} />;
  }
);

export default InputText;
