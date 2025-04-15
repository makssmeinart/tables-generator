import { useCallback, useState } from 'react'

export const useEditableCell = (
  initialValue: string,
  onChange: (value: string) => void
) => {
  const [isEditing, setEditing] = useState(false)
  const [inputValue, setInputValue] = useState(initialValue)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    },
    [setInputValue]
  )

  const startEditing = useCallback(() => {
    if (isEditing) {
      return
    }

    setEditing(true)
  }, [isEditing])

  const stopEditing = useCallback(() => {
    if (!isEditing) {
      return
    }

    onChange(inputValue)
    setEditing(false)
  }, [inputValue, onChange])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        stopEditing()
      } else if (e.key === 'Escape') {
        setInputValue(initialValue)
        setEditing(false)
      }
    },
    [stopEditing, initialValue]
  )

  return {
    isEditing,
    inputValue,
    handleChange,
    startEditing,
    stopEditing,
    handleKeyDown,
  }
}
