import styled from '@emotion/styled'
import { Column } from '../../../features/createTable/ui/CreateTableForm'
import { TableEditableCell } from './TableEditableCell'
import { useDispatch } from 'react-redux'
import { updateTable } from '../model/table.slice'
import { useCallback } from 'react'

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

  return (
    <TableStyled>
      <thead>
        <tr>
          {columns.map((column) => (
            <TableHeaderCellStyled key={column.field}>
              {column.label}
            </TableHeaderCellStyled>
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

const TableHeaderCellStyled = styled('th')`
  padding: 6px 4px;
  color: rgba(250, 250, 250, 0.5);
  background-color: #0a508b;
  border: 1px solid #0a508b;
  text-align: left;
`
