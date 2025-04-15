import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { copyTable, updateTable } from '../model/table.slice'
import { TableHeaderCell } from './TableHeaderCell'
import { useAppDispatch } from '../../../shared/lib/store/redux'
import { TableColumn, TableData } from '../../../shared/types/tables'
import { TableBodyCell } from './TableBodyCell'

interface Props {
  id: string
  columns: TableColumn[]
  data: TableData[]
}

export const Table = React.memo(({ id: tableId, columns, data }: Props) => {
  const dispatch = useAppDispatch()

  // TODO - figure out a better way to do this.
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
        {data.map((data, rowIndex) => (
          <tr key={`${tableId}${rowIndex}`}>
            {columns.map((column, columnIndex) => (
              <TableBodyCell
                key={`${column.field}${columnIndex}`}
                value={data[column.field]}
                rowIndex={rowIndex}
                field={column.field}
                getHandleCellChange={getHandleCellChange}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </TableStyled>
  )
})

const TableStyled = styled('table')`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  font-size: 12px;
  font-weight: 400;
`
