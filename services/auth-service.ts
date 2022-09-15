import { AxiosResponse } from 'axios'
import { API } from './api'

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
  const response = await API.post<typeof data, AxiosResponse<{
    customer: {
      id: string
      email: string
      name: string
    }
  }>>('/auth/signin', data)
  if (response.status !== 200) throw new Error('SignIn error')
  return response.data
}

export async function SignUp(data: signUpParams) {
  const response = await API.post<typeof data, AxiosResponse<{
    customer: {
      id: string
      email: string
      name: string
    }
  }>>('/auth/signup', data)
  if (response.status !== 201) throw new Error('SignUp error')
  return response.data
}

export async function signInAdmin(data: signInParamsAdmin) {
  const response = await API.post<typeof data, AxiosResponse<{
    admin: {
      id: string
      email: string
      name: string
    }
  }>>('/auth/admin/signin', data)
  if (response.status !== 200) throw new Error('SignIn error')
  return response.data
}

export async function SignUpAdmin(data: signUpParamsAdmin) {
  const response = await API.post<typeof data, AxiosResponse<{
    admin: {
      id: string
      email: string
      name: string
    }
  }>>('/auth/admin/signup', data)
  if (response.status !== 201) throw new Error('SignUp error')
  return response.data
}

export async function info() {
  const response = await API.get<{
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
  }>('/auth/info')
  if (response.status !== 200) throw new Error('Info error')
  return response.data
}
