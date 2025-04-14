import styled from '@emotion/styled'
import { Draggable } from '../../../shared/ui'
import { Table } from '../../../entities'
import { useAppSelector } from '../../../shared/lib/store/redux'
import { useTableDrag } from '../model/useTableDrag'

export const TableDashboard = () => {
  const tables = useAppSelector((state: RootState) => state.tables)

  const { handleDragStart, handleDrop } = useTableDrag()

  return (
    <TableWrapperStyled>
      {tables.map((table, index) => (
        <TableInnerStyled key={table.id}>
          <Draggable
            index={index}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
          >
            <Table table={table} />
          </Draggable>
        </TableInnerStyled>
      ))}
    </TableWrapperStyled>
  )
}

const TableWrapperStyled = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const TableInnerStyled = styled('div')`
  flex: 1 1 calc((100% - 32px) / 3);
  min-width: 550px;
  max-width: 100%;
`
