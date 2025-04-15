import React from 'react'
import styled from '@emotion/styled'
import { Input } from '../../../shared/ui'
import { useEditableCell } from '../lib/useEditableCell'

interface Props {
  value: string
  onChange: (newValue: string) => void
}

export const TableEditableCell = React.memo(({ value, onChange }: Props) => {
  const {
    isEditing,
    inputValue,
    handleChange,
    startEditing,
    stopEditing,
    handleKeyDown,
  } = useEditableCell(value, onChange)

  return (
    <TableCellStyled $isEditing={isEditing} onClick={startEditing}>
      {isEditing ? (
        <TableEditableCellStyled
          autoFocus
          value={inputValue}
          onChange={handleChange}
          onBlur={stopEditing}
          onKeyDown={handleKeyDown}
        />
      ) : (
        value
      )}
    </TableCellStyled>
  )
})

const TableCellStyled = styled('td')<{ $isEditing?: boolean }>`
  padding: ${({ $isEditing }) => ($isEditing ? '0px' : '0 10px')};
  height: 40px;
  background-color: white;
  border: 1px solid #d2d2d2;
`

const TableEditableCellStyled = styled(Input)`
  padding: 0 10px;
  outline: none;
  border-radius: 0;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  background-color: #f4f8ff;
  border: none;
  margin-top: -1px;
`
