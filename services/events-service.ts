import { API } from './api'

export async function findAll() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      events: Array<{
        id: string
        code: string
        text: string
        createdAt: string
      }>
    }
  }>('/events')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}
