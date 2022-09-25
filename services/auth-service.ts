import { API, NotificaMeResponse } from './api'

interface signInParams {
  email: string
  password: string
}

interface signUpParams {
  name: string
  email: string
  password: string
}

interface signInParamsAdmin {
  email: string
  password: string
}

interface signUpParamsAdmin {
  name: string
  email: string
  password: string
}

export async function signIn(data: signInParams) {
  const response = await API.post<typeof data, NotificaMeResponse<{
    customer: {
      id: string
      email: string
      name: string
    }
  }>>('/auth/signin', data)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function SignUp(data: signUpParams) {
  const response = await API.post<typeof data, NotificaMeResponse<{
    customer: {
      id: string
      email: string
      name: string
    }
  }>>('/auth/signup', data)
  if (response.data.ok) throw new Error('SignUp error')
  return response.data.payload
}

export async function signInAdmin(data: signInParamsAdmin) {
  const response = await API.post<typeof data, NotificaMeResponse<{
    admin: {
      id: string
      email: string
      name: string
    }
  }>>('/auth/admin/signin', data)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function SignUpAdmin(data: signUpParamsAdmin) {
  const response = await API.post<typeof data, NotificaMeResponse<{
    admin: {
      id: string
      email: string
      name: string
    }
  }>>('/auth/admin/signup', data)
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}

export async function info() {
  const response = await API.get<{
    ok: boolean
    message: string
    payload: {
      customer?: {
        id: string
        name: string
        email: string
      }
      admin?: {
        id: string
        name: string
        email: string
      }
    }
  }>('/auth/info')
  if (!response.data.ok) throw new Error(response.data.message)
  return response.data.payload
}
