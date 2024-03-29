import { Plan } from '../types/Plan'
import { API, NotificaMeResponse } from './api'

export async function find(id: string) {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      plan: Plan
    }
  }>(`/plans?id=${id}`)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function findAll() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      plans: Plan[]
    }
  }>('/plans')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

interface createParams {
  name: string
  description: string
  price: number
  events: string[]
}
export async function create(params: createParams) {
  const response = await API.post<typeof params, NotificaMeResponse<{
    plan: Plan
  }>>('/plans', params)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function destroy(id: string) {
  const response = await API.delete('/plans', {
    data: { id }
  })
  return response.data.ok
}

interface updateParams {
  id: string
  name?: string
  description?: string
  events?: string[]
  price?: number
}
export async function update(params: updateParams) {
  const response = await API.put<typeof params, NotificaMeResponse<{
    plan: Plan
  }>>('/plans', params)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function myPlans() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      plans: Plan[]
    }
  }>('/plans/my-plans')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function searchPlans(q: string) {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      plans: Plan[]
    }
  }>(`/plans?q=${q}`)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}
