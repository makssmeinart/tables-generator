import { createPortal } from 'react-dom'

interface Props {
  children: React.ReactNode
  container?: Element | DocumentFragment
}

export const Portal = ({ children, container = document.body }: Props) => {
  return createPortal(children, container)
}
