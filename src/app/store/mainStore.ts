import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tableReducer } from '../../entities/table'

export const mainReducer = combineReducers({
  tables: tableReducer,
})

export const mainStore = configureStore({
  reducer: mainReducer,
})

export type RootState = ReturnType<typeof mainStore.getState>
export type AppDispatch = typeof mainStore.dispatch
