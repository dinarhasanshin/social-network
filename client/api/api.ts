import axios from 'axios'
import { ProfileType } from '../types/types'

export const instance = (token) => (axios.create({
    withCredentials: true,
    baseURL: 'api',
    headers: {
        "Authorization": `Bearer ${token}`
    }
}))

export const authAPI = {
    signUp: () => {
        return instance("").post<any>(`auth/signUp`, {})
    }
}