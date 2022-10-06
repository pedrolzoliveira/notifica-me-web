import { API } from './api'
import { Event } from '../types/event'

export async function findAll() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      events: Event[]
    }
  }>('/events')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}
