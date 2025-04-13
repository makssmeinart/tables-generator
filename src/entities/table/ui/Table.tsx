import styled from '@emotion/styled'
import { Column } from '../../../features/createTable/ui/CreateTableForm'
import { TableEditableCell } from './TableEditableCell'
import { useDispatch } from 'react-redux'
import { copyTable, updateTable } from '../model/table.slice'
import { useCallback } from 'react'
import { TableHeaderCell } from './TableHeaderCell'

interface Props {
  tableId: number
  columns: Column[]
  data: any[]
}

export const Table = ({ tableId, columns, data }: Props) => {
  const dispatch = useDispatch()

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
          {columns.map((column) => (
            <TableHeaderCell
              key={column.field}
              column={column}
              onClick={handleIconClick}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((data, indx) => (
          <tr key={indx}>
            {columns.map((column) => (
              <TableEditableCell
                value={data[column.field]}
                onChange={getHandleCellChange(indx, column.field)}
                key={column.field}
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
