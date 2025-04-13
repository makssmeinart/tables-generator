import styled from '@emotion/styled'
import { Column } from '../../../features/createTable/ui/CreateTableForm'

interface Props {
  columns: Column[]
  data: any[]
}

export const Table = ({ columns, data }: Props) => {
  return (
    <TableStyled>
      <thead>
        <TableRowStyled>
          {columns.map((column) => (
            <TableHeaderCellStyled key={column.field}>
              {column.label}
            </TableHeaderCellStyled>
          ))}
        </TableRowStyled>
      </thead>
      <tbody>
        {data.map((data, indx) => (
          <TableRowStyled key={indx}>
            {columns.map((column) => (
              <TableCellStyled key={column.field}>
                {data[column.field]}
              </TableCellStyled>
            ))}
          </TableRowStyled>
        ))}
      </tbody>
    </TableStyled>
  )
}

const TableStyled = styled('table')`
  border-collapse: collapse;
  width: 100%;
`

const TableHeaderCellStyled = styled('th')`
  padding: 6px 4px;
  color: rgba(250, 250, 250, 0.5);
  background-color: #0a508b;
  text-align: left;
  font-weight: 400;
  font-size: 12px;
`

const TableRowStyled = styled('tr')``

const TableCellStyled = styled('td')`
  color: #000000;
  background-color: #ffffff;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #ebebeb;
  cursor: pointer;
`
