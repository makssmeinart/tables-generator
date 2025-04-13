import styled from '@emotion/styled'
import { InputHTMLAttributes } from 'react'

interface AdditionalProps {}

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof AdditionalProps>,
    Partial<AdditionalProps> {}

export const Input = ({ children, ...restProps }: Props) => {
  return <InputStyled {...restProps}>{children}</InputStyled>
}

const InputStyled = styled('input')`
  color: #000000;
  padding: 14px;
  border: 1px solid #e6ecef;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;

  &::placeholder {
    color: #868a8d;
  }
`
