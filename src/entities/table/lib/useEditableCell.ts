import { useCallback, useState } from 'react'

export const useEditableCell = (
  initialValue: string,
  onChange: (value: string) => void
) => {
  const [isEditing, setEditing] = useState(false)
  const [inputValue, setInputValue] = useState(initialValue)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  const startEditing = useCallback(() => {
    if (!isEditing) {
      setEditing(true)
    }
  }, [isEditing])

  const stopEditing = useCallback(() => {
    if (isEditing) {
      setEditing(false)
      onChange(inputValue)
    }
  }, [isEditing, inputValue, onChange])

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
