import { API } from './api'

export async function findAll() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      notifications: Array<{
        event: {
          id: string
          code: string
          text: string
          createdAt: string
        }
        receiver: {
          id: string
          name: string
          customerId: string
          number: string
          messenger: 'whatsapp' | 'telegram' | 'sms'
        }
        createdAt: string
      }>
    }
  }>('/notifications')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}
