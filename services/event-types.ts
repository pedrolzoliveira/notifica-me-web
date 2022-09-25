import { API, NotificaMeResponse } from './api'

export async function findAll() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      eventTypes: Array<{
        code: string
        name: string
        description?: string
        createdAt: string
        updatedAt: string
      }>
    }
  }>('/event-types')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function find(code: string) {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      eventType: {
        code: string
        name: string
        description?: string
        createdAt: string
        updatedAt: string
      }
    }
  }>(`/event-types?code=${code}`)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

interface createParams {
  code: string
  name: string
  description?: string
}

export async function create(params: createParams) {
  const response = await API.post<typeof params, NotificaMeResponse<{
    eventType: {
      code: string
      name: string
      description?: string
      createdAt: string
      updatedAt: string
    }
  }>>('/event-types', params)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

interface destroyParams {
  code: string
}
export async function destroy(params: destroyParams) {
  const response = await API.delete('/event-types', {
    data: params
  })
  return response.data.ok
}

interface updateParams {
  code: string
  name?: string
  description?: string
}
export async function update(params: updateParams) {
  const response = await API.put<typeof params, NotificaMeResponse<{
    eventType: {
      code: string
      name: string
      description?: string
      createdAt: string
      updatedAt: string
    }
  }>>('/event-types', params)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}
