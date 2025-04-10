import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { tableReducer } from '../../entities/table'

const mainReducer = combineReducers({
  tables: tableReducer,
})

export const mainStore = configureStore({
  reducer: mainReducer,
})
