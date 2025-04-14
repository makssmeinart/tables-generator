import { generateUUIDv4 } from '../../../shared/lib/utils/commonUtils'
import { Table, TableColumn, TableData } from '../../../shared/types/tables'

export const createEmptyTable = (columns: TableColumn[]): Table => {
  const emptyData = columns.reduce((acc, item) => {
    acc[item.field] = ''

    return acc
  }, {} as TableData)

  const table: Table = {
    id: generateUUIDv4(),
    columns,
    data: Array.from({ length: 4 }, () => ({ ...emptyData })),
  }

  return table
}
