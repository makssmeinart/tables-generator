import styled from '@emotion/styled'
import { Table } from '../../entities'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store/mainStore'

export const TableDashboard = () => {
  const tables = useSelector((state: RootState) => state.tables)

  return (
    <TableWrapperStyled>
      {tables.map((table) => {
        return (
          <Table key={table.id} columns={table.columns} data={table.data} />
        )
      })}
    </TableWrapperStyled>
  )
}

const TableWrapperStyled = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  table {
    flex: 1 1 calc((100% - 32px) / 3);
    min-width: 350px;
    max-width: 100%;
  }
`
