import { css, type SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { ButtonHTMLAttributes } from 'react'

interface AdditionButtonProps {
  color: 'primary' | 'secondary'
  size: 'sm' | 'md'
  round: 'sm' | 'md'
  weight: 'light' | 'normal' | 'bold'
}

interface Props
  extends Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      keyof AdditionButtonProps
    >,
    Partial<AdditionButtonProps> {}

const buttonStyled = {
  color: {
    primary: css`
      background-color: #1193ff;
    `,
    secondary: css`
      background-color: #1493fe;
    `,
  },
  size: {
    sm: css`
      font-size: 12px;
      padding: 14px 50px;
    `,
    md: css`
      font-size: 16px;
      padding: 15.5px 67px;
    `,
  },
  round: {
    sm: css`
      border-radius: 4px;
    `,
    md: css`
      border-radius: 2px;
    `,
  },
  weight: {
    light: css`
      font-weight: 300;
    `,
    normal: css`
      font-weight: 400;
    `,
    bold: css`
      font-weight: 700;
    `,
  },
} as const satisfies {
  [P in keyof AdditionButtonProps]: Record<
    AdditionButtonProps[P],
    SerializedStyles
  >
}

export const Button = ({
  type = 'button',
  color = 'primary',
  size = 'md',
  round = 'md',
  weight = 'normal',
  children,
  ...restProps
}: Props) => {
  return (
    <ButtonStyled
      color={color}
      size={size}
      round={round}
      weight={weight}
      type={type}
      {...restProps}
    >
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled('button')<AdditionButtonProps>`
  cursor: pointer;
  color: white;
  border: none;
  outline: none;

  ${({ color }) => buttonStyled.color[color]}
  ${({ size }) => buttonStyled.size[size]}
  ${({ round }) => buttonStyled.round[round]}
  ${({ weight }) => buttonStyled.weight[weight]}
`
