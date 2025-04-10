export interface Table<C, D> {
  id: string
  columns: C[]
  data: D[]
}
