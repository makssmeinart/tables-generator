import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tableReducer } from '../../entities/table'

export const mainReducer = combineReducers({
  tables: tableReducer,
})

export const store = configureStore({
  reducer: mainReducer,
})
