import { ReactNode } from 'react'
import { usePopoverContext } from '../model/usePopoverContext'

interface Props {
  children: ReactNode
}

export const PopoverContent = ({ children }: Props) => {
  const { isOpen, contentRef } = usePopoverContext()

  if (!isOpen) {
    return null
  }

  return <div ref={contentRef}>{children}</div>
}
