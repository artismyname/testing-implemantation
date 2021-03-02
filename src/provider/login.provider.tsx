import React, { createContext, useContext, useState } from 'react'

interface ILoginContext {
  loginLoading: boolean
  handleSetLoginLoading: (v: boolean) => void
}

const LoginContext = createContext<ILoginContext | null>(null)

export const LoginProvider: React.FC = ({ children }) => {
  const [loginLoading, setLoginLoading] = useState<boolean>(false)

  const handleSetLoginLoading = (v: boolean) => setLoginLoading(v)

  return (
    <LoginContext.Provider value={{ loginLoading, handleSetLoginLoading }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => {
  const login = useContext(LoginContext)

  if (login == null) {
    throw new Error("useLogin was called outside of an LoginProvider")
  }

  return login
}