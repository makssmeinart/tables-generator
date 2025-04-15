import { useCallback } from 'react'
import { TableEditableCell } from './TableEditableCell'

interface Props {
  value: string
  rowIndex: number
  field: string
  getHandleCellChange: (
    rowIndex: number,
    field: string
  ) => (newValue: string) => void
}

export const TableBodyCell = ({
  value,
  rowIndex,
  field,
  getHandleCellChange,
}: Props) => {
  const onChange = useCallback(getHandleCellChange(rowIndex, field), [
    rowIndex,
    field,
  ])

  return <TableEditableCell value={value} onChange={onChange} />
}
