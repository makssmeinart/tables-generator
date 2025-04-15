import styled from '@emotion/styled'
import { InputHTMLAttributes } from 'react'

export const Input = ({
  children,
  ...restProps
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <InputStyled {...restProps}>{children}</InputStyled>
}

const InputStyled = styled('input')`
  color: #000000;
  padding: 14px;
  border: 1px solid #e6ecef;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  transition:
    border 0.3s ease,
    box-shadow 0.3s ease;

  &::placeholder {
    color: #868a8d;
  }

  &:focus {
    border-color: #a0c4ff;
    outline: none;
    box-shadow: 0 0 6px rgba(160, 196, 255, 0.3);
  }
`
