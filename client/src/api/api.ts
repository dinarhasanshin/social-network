import axios from 'axios'
import { ProfileType } from '../../types/types'

export type SignInType = {
    token: string,
    userId: string
}

export const instance = (token: string) => axios.create({
    withCredentials: true,
    baseURL: 'api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    
})

export const authAPI = {
    signUp: (email: string, password: string, firstName: string, lastName: string, birthDay: string) => {
        return instance('').post<any>(`auth/signUp`, {email, password, firstName, lastName, birthDay}).then(response => response.data)
    },
    signIn: (email: string, password: string) => {
        return instance('').post<SignInType>(`auth/signIn`, {email, password}).then(response => response.data)
    }
}