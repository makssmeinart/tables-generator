import { ReactNode } from 'react'
import { PopoverProvider } from '../model/PopoverProvider'
import { PopoverTrigger } from './PopoverTrigger'
import { PopoverContent } from './PopoverContent'
import { PopoverPositioner } from './PopoverPositioner'

interface Props {
  position?: 'bottom-left'
  closeOnEscape?: boolean
  closeOnOutsideClick?: boolean
  children: ReactNode
}

export const Popover = ({
  position = 'bottom-left',
  closeOnEscape = true,
  closeOnOutsideClick = true,
  children,
}: Props) => {
  return (
    <PopoverProvider
      position={position}
      closeOnEscape={closeOnEscape}
      closeOnOutsideClick={closeOnOutsideClick}
    >
      {children}
    </PopoverProvider>
  )
}

Popover.Trigger = PopoverTrigger
Popover.Positioner = PopoverPositioner
Popover.Content = PopoverContent
