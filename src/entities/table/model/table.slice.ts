import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { createEmptyTable } from '../lib/tableUtils'
import { generateUUIDv4 } from '../../../shared/lib/utils/commonUtils'
import { TableState } from './type'
import { Table } from '../../../shared/types/tables'

const initialState: TableState = []

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
        tableId: string
        rowIndex: number
        field: string
        newValue: string
      }>
    ) => {
      const { tableId, rowIndex, field, newValue } = action.payload

      const tableIndex = state.findIndex((t) => t.id === tableId)

      if (tableIndex === -1) {
        return
      }

      const table = state[tableIndex]

      if (!table.data[rowIndex]) {
        return
      }

      table.data[rowIndex] = {
        ...table.data[rowIndex],
        [field]: newValue,
      }
    },

    copyTable: (state, action: PayloadAction<{ copiedTableId: string }>) => {
      const index = state.findIndex(
        (table) => table.id === action.payload.copiedTableId
      )

      if (index === -1) {
        return
      }

      const copiedTable = state[index]

      const newTable: Table = {
        id: generateUUIDv4(),
        columns: [...copiedTable.columns],
        data: copiedTable.data.map((row) => ({ ...row })),
      }

      state.splice(index + 1, 0, newTable)
    },

    reorderTables: (
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) => {
      const { fromIndex, toIndex } = action.payload

      if (
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex >= state.length ||
        toIndex >= state.length
      ) {
        return
      }

      const [moved] = state.splice(fromIndex, 1)

      state.splice(toIndex, 0, moved)
    },
  },
})

export const { createTable, updateTable, copyTable, reorderTables } =
  tableSlice.actions
export const { reducer } = tableSlice
