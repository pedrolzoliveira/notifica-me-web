import axios, { AxiosResponse } from 'axios'

export interface NotificaMeResponse<T = any> extends AxiosResponse {
  data: {
    ok: boolean
    payload?: T
    message?: string
    errors?: any[]
  }
}

export const API = axios.create({
  baseURL: 'http://localhost:3030', // process.env.API_URL
  withCredentials: true
})
