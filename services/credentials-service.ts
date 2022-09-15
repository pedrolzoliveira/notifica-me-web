import { AxiosResponse } from 'axios'
import { API } from './api'

export interface CreateParams {
  code: string
  name: string
}

export async function create(params: CreateParams) {
  const response = await API.post<typeof params, AxiosResponse<{
    credential: {
      id: string
      name: string
      key: string
      createdAt: string
      eventCode: string
    }
  }>>('/credentials', params)
  return response.data.credential
}

export async function findAll() {
  const response = await API.get<{
    credentials: Array<{
      id: string
      name: string
      key: string
      createdAt: string
      eventCode: string
    }>
  }>('/credentials')
  return response.data.credentials
}

export async function destroy(id: string) {
  const response = await API.delete('/credentials', {
    data: { id }
  })
  return response.status === 200
}
