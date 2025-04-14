export const generateUUIDv4 = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    (char: string): string => {
      const r: number = Math.floor(Math.random() * 16)
      const v: number = char === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    }
  )
