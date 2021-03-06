import React from 'react'
import { Alert } from 'react-native'
import { render, fireEvent } from '@testing-library/react-native'

import Login from '../screens/Login'
import Home from '../screens/Home'

import { AuthProvider } from '../provider/auth.provider'
import { LoginProvider } from '../provider/login.provider'

const LoginScreen =
  <AuthProvider>
    <LoginProvider>
      <Login />
    </LoginProvider>
  </AuthProvider>

const HomeScreen =
  <AuthProvider>
    <Home />
  </AuthProvider>

it('should render correctly', async () => {
  const screen = render(LoginScreen)

  screen.getByPlaceholderText('Number')
  screen.getByText('Submit')
})

it('should insert number and submit', async () => {
  const screen = render(LoginScreen)

  const textInput = screen.getByPlaceholderText('Number')
  const buttonSubmit = screen.getByText('Submit')

  await fireEvent.changeText(textInput, '99999999999')
  await fireEvent.press(buttonSubmit)
})


it('should insert number, submit and alert a message of error', async () => {
  const screen = render(LoginScreen)

  spyOn(Alert, 'alert')

  const buttonSubmit = screen.getByText('Submit')

  await fireEvent.press(buttonSubmit)

  expect(Alert.alert).toHaveBeenCalledWith('Error', 'The number you entered is incorrect')
})