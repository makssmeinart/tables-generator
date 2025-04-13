import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Column } from '../../../features/createTable/ui/CreateTableForm'
import { createEmptyTable } from '../lib/tableUtils'

export interface Table {
  id: number
  columns: Column[]
  data: any[]
}

type TablesState = Table[]

const initialState: TablesState = []

const tableSlice = createSlice({
  name: 'tablesSlice',
  initialState,
  reducers: {
    createTable: (
      state,
      action: PayloadAction<{ columns: Table['columns'] }>
    ) => {
      const newTable = createEmptyTable(action.payload.columns)

      state.push(newTable)
    },

    updateTable: (
      state,
      action: PayloadAction<{
        tableId: number
        rowIndex: number
        field: string
        newValue: string
      }>
    ) => {
      const { tableId, rowIndex, field, newValue } = action.payload

      const table = state.find((t) => t.id === tableId)

      if (!table || !table.data[rowIndex]) {
        return
      }

      table.data[rowIndex][field] = newValue
    },

    copyTable: (state, action: PayloadAction<{ copiedTable: Table }>) => {
      const { copiedTable } = action.payload

      const index = state.findIndex((table) => table.id === copiedTable.id)

      if (index === -1) {
        return
      }

      const newTable: Table = {
        id: Date.now(),
        columns: copiedTable.columns,
        data: copiedTable.data,
      }

      state.splice(index + 1, 0, newTable)
    },
  },
})

export const { createTable, updateTable, copyTable } = tableSlice.actions
export default tableSlice.reducer
