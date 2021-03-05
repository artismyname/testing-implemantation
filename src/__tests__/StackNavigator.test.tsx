import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

import AppNavigator from '../stacks'
import { AuthProvider, useAuth } from '../provider/auth.provider'

describe('Testing react navigation', () => {
  test('loading while get user and then render LoginScreen', async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    )

    const { findByTestId, findByText } = render(component, { wrapper: AuthProvider })

    findByTestId('ActivityIndicator')

    await waitFor(() => findByText('Submit'))

    // const input = await findByPlaceholderText('Number')
    // const button = await findByText('Submit')

    // const cellphoneNumber = '99999999999'

    // fireEvent.changeText(input, cellphoneNumber)
    // fireEvent.press(button)
  })
})