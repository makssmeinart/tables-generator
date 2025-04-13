import React, { createContext, ReactNode } from 'react'
import { usePopover } from './usePopover'

interface PopoverContextType {
  position: 'bottom-left'
  isOpen: boolean
  contentRef: React.RefObject<HTMLDivElement | null>
  triggerRef: React.RefObject<HTMLDivElement | null>
  toggle: () => void
  close: () => void
}

export const PopoverContext = createContext<PopoverContextType | null>(null)

interface Props {
  position: 'bottom-left'
  closeOnEscape: boolean
  closeOnOutsideClick: boolean
  children: ReactNode
}

export const PopoverProvider = ({
  position,
  closeOnEscape,
  closeOnOutsideClick,
  children,
}: Props) => {
  const { isOpen, contentRef, triggerRef, toggle, close } = usePopover(
    closeOnEscape,
    closeOnOutsideClick
  )

  const contextValue = {
    isOpen,
    position,
    contentRef,
    triggerRef,
    toggle,
    close,
  }

  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  )
}
