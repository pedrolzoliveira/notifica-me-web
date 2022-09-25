import { API, NotificaMeResponse } from './api'

export interface CreateParams {
  code: string
  name: string
}

export async function create(params: CreateParams) {
  const response = await API.post<typeof params, NotificaMeResponse<{
    credential: {
      id: string
      name: string
      key: string
      createdAt: string
      eventCode: string
    }
  }>>('/credentials', params)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function findAll() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      credentials: Array<{
        id: string
        name: string
        key: string
        createdAt: string
        eventCode: string
      }>
    }
  }>('/credentials')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function destroy(id: string) {
  const response = await API.delete('/credentials', {
    data: { id }
  })
  return response.data.ok
}
