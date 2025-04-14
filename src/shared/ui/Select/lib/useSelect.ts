import { useState } from 'react'

export const useSelect = (
  fieldKey: string,
  onChange: (fieldKey: string, value: string) => void
) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSelect = () => {
    setIsOpen((prev) => !prev)
  }

  const handleOptionClick = (option: string) => {
    onChange(fieldKey, option)
    setIsOpen(false)
  }

  return { isOpen, toggleSelect, handleOptionClick }
}
