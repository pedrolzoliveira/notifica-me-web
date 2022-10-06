import { Event } from './event'
import { Receiver } from './receivers'

export interface Notification {
  event: Event
  receiver: Receiver
  createdAt: string
}
