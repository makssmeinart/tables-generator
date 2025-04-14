import { usePopoverContext } from '../lib/usePopoverContext'

interface Props {
  children: React.ReactNode
}

export const PopoverTrigger = ({ children }: Props) => {
  const { toggle, triggerRef } = usePopoverContext()

  return (
    <div ref={triggerRef} onClick={toggle}>
      {children}
    </div>
  )
}
