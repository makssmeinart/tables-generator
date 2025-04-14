import { ReactNode } from 'react'
import { usePopoverContext } from '../lib/usePopoverContext'

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
