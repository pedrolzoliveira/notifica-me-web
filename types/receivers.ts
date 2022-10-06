import { EventType } from './event-type'

export interface Receiver {
  id: string
  customerId: string
  name: string
  number: string
  messenger: 'whatsapp' | 'telegram' | 'sms'
  events: EventType[]
}
