import { AxiosResponse } from 'axios'
import { API } from './api'

export async function findAll() {
  const response = await API.get<{
    eventTypes: Array<{
      code: string
      name: string
      description?: string
      createdAt: string
      updatedAt: string
    }>
  }>('/event-types')
  return response.data.eventTypes
}

export async function find(code: string) {
  const response = await API.get<{
    eventType: {
      code: string
      name: string
      description?: string
      createdAt: string
      updatedAt: string
    }
  }>(`/event-types?code=${code}`)
  return response.data.eventType
}

interface createParams {
  code: string
  name: string
  description?: string
}

export async function create(params: createParams) {
  const response = await API.post<typeof params, AxiosResponse<{
    eventType: {
      code: string
      name: string
      description?: string
      createdAt: string
      updatedAt: string
    }
  }>>('/event-types', params)
  return response.data.eventType
}

interface destroyParams {
  code: string
}
export async function destroy(params: destroyParams) {
  const response = await API.delete('/event-types', {
    data: params
  })
  return response.status === 200
}

interface updateParams {
  code: string
  name?: string
  description?: string
}
export async function update(params: updateParams) {
  const response = await API.put<typeof params, AxiosResponse<{
    eventType: {
      code: string
      name: string
      description?: string
      createdAt: string
      updatedAt: string
    }
  }>>('/event-types', params)
  return response.data.eventType
}
