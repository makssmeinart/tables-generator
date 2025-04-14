import { useCallback, useEffect, useState } from 'react'

export const useDraggable = () => {
  const [node, setNode] = useState<HTMLElement | null>(null)
  const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 })

  const ref = useCallback((nodeEle: HTMLElement | null) => {
    if (!nodeEle) {
      return
    }

    setNode(nodeEle)
  }, [])

  useEffect(() => {
    if (node) {
      node.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
    }
  }, [node, dx, dy])

  useEffect(() => {
    if (!node) {
      return
    }

    const handleMouseDown = (e: MouseEvent) => {
      const startPos = {
        x: e.clientX - dx,
        y: e.clientY - dy,
      }

      const handleMouseMove = (e: MouseEvent) => {
        const dx = e.clientX - startPos.x
        const dy = e.clientY - startPos.y

        setOffset({ dx, dy })
      }

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      const startPos = {
        x: touch.clientX - dx,
        y: touch.clientY - dy,
      }

      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0]
        const dx = touch.clientX - startPos.x
        const dy = touch.clientY - startPos.y

        setOffset({ dx, dy })
      }

      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }

      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    }

    node.addEventListener('mousedown', handleMouseDown)
    node.addEventListener('touchstart', handleTouchStart)

    return () => {
      node.removeEventListener('mousedown', handleMouseDown)
      node.removeEventListener('touchstart', handleTouchStart)
    }
  }, [node, dx, dy])

  return [ref] as const
}
