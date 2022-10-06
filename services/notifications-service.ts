import { Notification } from '../types/notification'
import { API } from './api'

export async function findAll() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      notifications: Notification[]
    }
  }>('/notifications')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}
