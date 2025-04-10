import { createSlice } from '@reduxjs/toolkit'
import { Table } from './types'

const initialState: Table<string, string>[] = []

const tableSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    createTable(state, action) {},
    copyTable(state, action) {},
  },
})

export const { createTable, copyTable } = tableSlice.actions
export default tableSlice.reducer
