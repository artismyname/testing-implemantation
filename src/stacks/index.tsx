import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import Home from '../screens/Home'
import Loading from '../Components/Loading'

import { useAuth } from '../provider/auth.provider'
import { LoginProvider } from '../provider/login.provider'
import { NavigationContainer } from '@react-navigation/native'

const { Screen, Navigator } = createStackNavigator()

function LoginScreen() {
  return (
    <LoginProvider>
      <Login />
    </LoginProvider>
  )
}

export default function StackNavigation() {
  const { isLoggedIn, authLoading } = useAuth()

  if (authLoading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      <Navigator headerMode='none'>
        {isLoggedIn
          ? <Screen
            name="Home"
            component={Home}
          />
          : <Screen
            name="Login"
            component={LoginScreen}
          />}
      </Navigator>
    </NavigationContainer>
  )
}