import type { UUID } from 'crypto'

export interface Feed {
  Category: {
    name: string
  }
  content: string
  title: string
  user_id: UUID
}

export interface Category {
  id: number
  name: string
  parent_category: number | null
}
