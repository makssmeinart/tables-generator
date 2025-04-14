import styled from '@emotion/styled'
import { TableEditableCell } from './TableEditableCell'
import { copyTable, updateTable } from '../model/table.slice'
import { useCallback } from 'react'
import { TableHeaderCell } from './TableHeaderCell'
import { useAppDispatch } from '../../../shared/lib/store/redux'
import { type Table as ITable } from '../../../shared/types/tables'
interface Props {
  table: ITable
}

export const Table = ({ table }: Props) => {
  const { id: tableId, columns, data } = table

  const dispatch = useAppDispatch()

  const getHandleCellChange = useCallback(
    (rowIndex: number, field: string) => (newValue: string) => {
      dispatch(updateTable({ tableId, rowIndex, field, newValue }))
    },
    [dispatch, tableId]
  )

  const handleIconClick = useCallback(() => {
    dispatch(copyTable({ copiedTableId: tableId }))
  }, [dispatch, tableId])

  return (
    <TableStyled>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <TableHeaderCell
              key={`${column.field}-${index}`}
              column={column}
              onClick={handleIconClick}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={`${tableId}${index}`}>
            {columns.map((column, columnIndex) => (
              <TableEditableCell
                key={`${column.field}${columnIndex}`}
                value={data[column.field]}
                onChange={getHandleCellChange(index, column.field)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </TableStyled>
  )
}

const TableStyled = styled('table')`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  font-size: 12px;
  font-weight: 400;
`
