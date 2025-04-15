import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  createTable,
  updateTable,
  copyTable,
  reorderTables,
  reducer,
} from '../table.slice'
import { Table, TableColumn } from '../../../../shared/types/tables'

import * as tableUtils from '../../lib/tableUtils'

vi.mock('../../../../shared/lib/utils/commonUtils', () => ({
  generateUUIDv4: vi.fn(() => 'mocked-uuid'),
}))

describe('tableSlice reducer', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should handle createTable', () => {
    const columns: TableColumn[] = [
      { field: 'name', label: 'Name' },
      { field: 'age', label: 'Age' },
    ]

    const createEmptyTableMock = vi
      .spyOn(tableUtils, 'createEmptyTable')
      .mockReturnValue({
        id: 'table-id-1',
        columns,
        data: [],
      })

    const state = reducer([], createTable({ columns }))

    expect(state).toHaveLength(1)
    expect(state[0].id).toBe('table-id-1')
    expect(state[0].columns).toEqual(columns)
    expect(state[0].data).toEqual([])
    expect(createEmptyTableMock).toHaveBeenCalledWith(columns)
  })

  it('should handle updateTable', () => {
    const initialState: Table[] = [
      {
        id: 'table-1',
        columns: [{ field: 'name', label: 'Name' }],
        data: [{ name: 'Makss' }],
      },
    ]

    const action = updateTable({
      tableId: 'table-1',
      rowIndex: 0,
      field: 'name',
      newValue: 'Jhonny',
    })

    const state = reducer(initialState, action)
    expect(state[0].data[0].name).toBe('Jhonny')
  })

  it('should skip update if row doesn’t exist', () => {
    const initialState: Table[] = [
      {
        id: 'table-1',
        columns: [{ field: 'name', label: 'Name' }],
        data: [],
      },
    ]

    const action = updateTable({
      tableId: 'table-1',
      rowIndex: 0,
      field: 'name',
      newValue: 'Bob',
    })

    const state = reducer(initialState, action)
    expect(state[0].data).toHaveLength(0)
  })

  it('should handle copyTable', () => {
    const initialState: Table[] = [
      {
        id: 'original-id',
        columns: [{ field: 'name', label: 'Name' }],
        data: [{ name: 'Alice' }],
      },
    ]

    const state = reducer(
      initialState,
      copyTable({ copiedTableId: 'original-id' })
    )

    expect(state).toHaveLength(2)
    expect(state[1].id).toBe('mocked-uuid')
    expect(state[1].columns).toEqual(initialState[0].columns)
    expect(state[1].data).toEqual([{ name: 'Alice' }])
    expect(state[1].data[0]).not.toBe(initialState[0].data[0]) // Ensure deep clone
  })

  it('should handle reorderTables', () => {
    const initialState: Table[] = [
      { id: 't1', columns: [], data: [] },
      { id: 't2', columns: [], data: [] },
      { id: 't3', columns: [], data: [] },
    ]

    const state = reducer(
      initialState,
      reorderTables({ fromIndex: 0, toIndex: 2 })
    )

    expect(state.map((table) => table.id)).toEqual(['t2', 't3', 't1'])
  })

  it('should not crash on invalid reorderTables', () => {
    const initialState: Table[] = [{ id: 't1', columns: [], data: [] }]

    const state = reducer(
      initialState,
      reorderTables({ fromIndex: 0, toIndex: 5 })
    )
    expect(state).toEqual(initialState)
  })
})
