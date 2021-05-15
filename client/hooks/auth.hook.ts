import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

type localStorageType = {
    userId: string,
    token: string
}

export const useAuth = () => {
    const [ready, setReady] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)
    const [userId, setUserId] = useState<string | null>(null)

    const login = useCallback((jwtToken: string, id: string) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))
    }, [])


    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])


    useEffect(() => {
        const data: localStorageType = JSON.parse(localStorage.getItem(storageName))

        if(data && data.token){
            login(data.token, data.userId)
        }
        setReady(true)
    }, [login])

    return { login, logout, token, userId, ready }
}