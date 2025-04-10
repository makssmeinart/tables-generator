import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { mainStore } from '../store'

interface Props {
  children: ReactNode
}

export const MainProvider = ({ children }: Props) => {
  return <Provider store={mainStore}>{children}</Provider>
}
