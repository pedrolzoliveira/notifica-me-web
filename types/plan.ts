import { EventType } from './event-type'

export interface Plan {
  id: string
  name: string
  description: string
  price: number
  createdAt: string
  updatedAt: string
  events: EventType[]
}
