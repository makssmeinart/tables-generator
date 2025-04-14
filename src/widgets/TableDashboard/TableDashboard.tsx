import styled from '@emotion/styled'
import { Draggable } from '../../shared/ui'
import { Table } from '../../entities'
import { useState } from 'react'
import { reorderTables } from '../../entities/table/model/table.slice'
import { useAppDispatch, useAppSelector } from '../../shared/lib/store/redux'

export const TableDashboard = () => {
  const tables = useAppSelector((state: RootState) => state.tables)

  const dispatch = useAppDispatch()
  const [dragIndex, setDragIndex] = useState<number | null>(null)

  const handleDragStart = (index: number) => {
    setDragIndex(index)
  }

  const handleDrop = (dropIndex: number) => {
    if (dragIndex !== null && dragIndex !== dropIndex) {
      dispatch(reorderTables({ fromIndex: dragIndex, toIndex: dropIndex }))
    }

    setDragIndex(null)
  }

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
  min-width: 350px;
  max-width: 100%;
`
