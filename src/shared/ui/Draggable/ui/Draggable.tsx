import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface Props {
  index: number
  children: ReactNode
  onDragStart: (index: number) => void
  onDrop: (index: number) => void
}

export const Draggable = ({ index, children, onDragStart, onDrop }: Props) => {
  return (
    <DraggableContainerStyled
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(index)}
    >
      {children}
    </DraggableContainerStyled>
  )
}

const DraggableContainerStyled = styled('div')``
