import React, { createContext, useContext, useState } from 'react'

interface ILoginContext {
  loginLoading: boolean
  setLoginLoading:  React.Dispatch<React.SetStateAction<boolean>>
}

const LoginContext = createContext<ILoginContext | null>(null)

export const LoginProvider: React.FC = ({ children }) => {
  const [loginLoading, setLoginLoading] = useState<boolean>(false)

  return (
    <LoginContext.Provider value={{ loginLoading, setLoginLoading }}>
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