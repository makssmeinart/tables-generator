import { useEffect, useRef, useState } from 'react'

export const usePopover = (
  closeOnEscape: boolean = true,
  closeOnOutsideClick: boolean = true
) => {
  const [isOpen, setIsOpen] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const toggle = () => setIsOpen((prev) => !prev)
  const close = () => setIsOpen(false)

  useEffect(() => {
    if (!closeOnOutsideClick) {
      return
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!contentRef.current || !triggerRef.current) {
        return
      }

      if (
        !contentRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [closeOnOutsideClick])

  useEffect(() => {
    if (!closeOnEscape) {
      return
    }

    const handleKeydownEvent = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleKeydownEvent)

    return () => document.removeEventListener('keydown', handleKeydownEvent)
  }, [closeOnEscape])

  return {
    isOpen,
    contentRef,
    triggerRef,
    toggle,
    close,
  }
}
