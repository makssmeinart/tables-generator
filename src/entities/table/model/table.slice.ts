import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Column } from '../../../features/createTable/ui/CreateTableForm'

interface Table {
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
      const { columns } = action.payload

      const newTable: Table = {
        id: Date.now(),
        columns,
        data: [
          { name: 'Makss', surname: 'Fillipinov', age: 12, location: 'Dpils' },
          { name: 'Evgenii', surname: 'Brocalli', age: 412, location: 'Riga' },
          { name: 'Arturs', surname: 'Cround', age: 31, city: 'Krizhi' },
          { name: 'Ilja', surname: 'Red', age: 152, city: 'Livani' },
          { name: 'Peteris', surname: 'Bomb', age: 17, city: 'Ekabpils' },
        ],
      }

      state.push(newTable)
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

export const { createTable, copyTable } = tableSlice.actions
export default tableSlice.reducer
