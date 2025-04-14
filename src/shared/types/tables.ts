export type TableColumn = {
  field: string
  label: string
  interactiveIcon?: {
    label: string
  }
}

export type TableData = Record<string, TableColumn['field']>

export interface Table {
  id: string
  columns: TableColumn[]
  data: TableData[]
}