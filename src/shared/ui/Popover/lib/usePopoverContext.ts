import { useContext } from 'react'
import { PopoverContext } from '../model/PopoverProvider'

export const usePopoverContext = () => {
  const context = useContext(PopoverContext)

  if (!context) {
    throw new Error('usePopoverContext must be used within a PopoverProvider!!')
  }

  return context
}
