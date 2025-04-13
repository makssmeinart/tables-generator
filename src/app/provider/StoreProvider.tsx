import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { mainStore } from '../store'

interface Props {
  children: ReactNode
}

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={mainStore}>{children}</Provider>
}
