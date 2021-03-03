import 'react-native-gesture-handler'
import React from 'react'

import { AuthProvider } from './src/provider/auth.provider'
import StackNavigation from './src/stacks'

const App = () =>
  <AuthProvider>
    <StackNavigation />
  </AuthProvider>

export default App