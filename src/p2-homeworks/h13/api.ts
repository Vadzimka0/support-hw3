import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const hwAPI = {
  postRequest(checked: boolean) {
    return instance.post<ResponseType>('', {"success": checked});
  }
}

export type ResponseType = {
  errorText: string
  info: string
  yourBody?: {
    success: boolean
  },
  yourQuery?: {}
}