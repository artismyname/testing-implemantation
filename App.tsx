import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from './src/provider/auth.provider'
import StackNavigation from './src/stacks'

const App = () =>
  <AuthProvider>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  </AuthProvider>

export default App