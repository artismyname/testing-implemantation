import AsyncStorage from '@react-native-community/async-storage'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface IAuthContext {
  user: User
  isLoggedIn: boolean
  authLoading: boolean
  handleSetIsLoggedIn: (v: boolean) => void
  handleSetAuthLoading: (v: boolean) => void
  loadAuthProvider: () => Promise<void>
}

type User = {
  username: string
} | null

const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [authLoading, setAuthLoading] = useState<boolean>(true)

  useEffect(() => {
    loadAuthProvider()
  }, [])

  const loadAuthProvider = async () => {
    try {
      let storedUser = await AsyncStorage.getItem('user')

      if (storedUser) {
        setUser(JSON.parse(storedUser))
        setIsLoggedIn(true)
        setAuthLoading(false)
      } else {
        setIsLoggedIn(false)
        throw "User isn't logged"
      }
    } catch (err) {
      console.log(err)
      setAuthLoading(false)
    }
  }

  const handleSetIsLoggedIn = (v: boolean) => setIsLoggedIn(v)
  const handleSetAuthLoading = (v: boolean) => setAuthLoading(v)

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, authLoading, handleSetIsLoggedIn, handleSetAuthLoading, loadAuthProvider }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  if (auth == null) {
    throw new Error("useAuth was called outside of an AuthProvider")
  }

  return auth
}