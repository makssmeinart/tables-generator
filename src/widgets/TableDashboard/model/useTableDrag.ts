import { useState } from 'react'
import { useAppDispatch } from '../../../shared/lib/store/redux'
import { reorderTables } from '../../../entities/table/model/table.slice'

export const useTableDrag = () => {
  const dispatch = useAppDispatch()
  const [dragIndex, setDragIndex] = useState<number | null>(null)

  const handleDragStart = (index: number) => {
    setDragIndex(index)
  }

  const handleDrop = (dropIndex: number) => {
    if (dragIndex !== null && dragIndex !== dropIndex) {
      dispatch(reorderTables({ fromIndex: dragIndex, toIndex: dropIndex }))
    }
    setDragIndex(null)
  }

  return { handleDragStart, handleDrop }
}
