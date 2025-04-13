import { ReactNode } from 'react'
import { usePopoverContext } from '../model/usePopoverContext'
import styled from '@emotion/styled'

interface Props {
  children: ReactNode
}

export const PopoverPositioner = ({ children }: Props) => {
  const { isOpen, triggerRef, position } = usePopoverContext()

  if (!isOpen || triggerRef.current === null) {
    return null
  }

  const { height, y, x } = triggerRef.current.getBoundingClientRect()

  const positionStyles = {
    'bottom-left': { top: y + height, left: x },
  }

  return (
    <PopoverWrapperStyled style={positionStyles[position]}>
      {children}
    </PopoverWrapperStyled>
  )
}

const PopoverWrapperStyled = styled('div')`
  position: absolute;
`
