import { useState } from 'react'

export const useEditableCell = (
  initialValue: string,
  onChange: (value: string) => void
) => {
  const [isEditing, setEditing] = useState(false)
  const [inputValue, setInputValue] = useState(initialValue)

  const startEditing = () => {
    if (isEditing) {
      return
    }

    setEditing(true)
  }

  const stopEditing = () => {
    if (!isEditing) {
      return
    }

    setEditing(false)
    onChange(inputValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      stopEditing()
    } else if (e.key === 'Escape') {
      setInputValue(initialValue)
      setEditing(false)
    }
  }

  return {
    isEditing,
    inputValue,
    setInputValue,
    startEditing,
    stopEditing,
    handleKeyDown,
  }
}
