import { Table } from '../model/table.slice'
import { generateUUIDv4 } from '../../../shared/lib/commonUtils'

export const createEmptyTable = (columns: Table['columns']): Table => {
  const emptyData = columns.reduce(
    (acc, item) => {
      acc[item.field] = ''

      return acc
    },
    {} as Record<string, string>
  )

  const table: Table = {
    id: generateUUIDv4(),
    columns,
    data: Array.from({ length: 4 }, () => ({ ...emptyData })),
  }

  return table
}
