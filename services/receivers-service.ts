import { API, NotificaMeResponse } from './api'

interface Receiver {
  id: string
  customerId: string
  name: string
  number: string
  messenger: 'whatsapp' | 'telegram' | 'sms'
  events: Array<{
    id: string
    code: string
    receiverId: string
  }>
}

export async function findAll() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      receivers: Receiver[]
    }
  }>('/receivers')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function find(id: string) {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      receiver: {
        id: string
        customerId: string
        name: string
        number: string
        messenger: 'whatsapp' | 'telegram' | 'sms'
        events: Array<{
          eventCode: string
          receiverId: string
        }>
      }
    }
  }>(`/receivers?id=${id}`)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

interface createParams {
  name: string
  number: string
  messenger: 'whatsapp' | 'telegram' | 'sms'
}

export async function create(params: createParams) {
  const response = await API.post<typeof params, NotificaMeResponse<{
    receiver: Omit<Receiver, 'events'>
  }>>('/receivers', params)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

interface destroyParams {
  id: string
}

export async function destroy(params: destroyParams) {
  const response = await API.delete('/receivers', {
    data: params
  })
  return response.data.ok
}

interface updateParams {
  id: string
  name: string
  events: string[]
}
export async function update(params: updateParams) {
  const response = await API.put<typeof params, NotificaMeResponse<{
    receiver: {
      id: string
      customerId: string
      number: string
      name: string
      messenger: 'whatsapp' | 'telegram' | 'sms'
      events: Array<{
        eventCode: string
        receiverId: string
      }>
    }
  }>>('/receivers', params)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}
