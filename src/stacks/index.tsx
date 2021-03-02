import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/Home'
import DetailsScreen from '../screens/Details'

const { Screen, Navigator } = createStackNavigator()

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Navigator headerMode='none'>
        <Screen
          name="Home"
          component={HomeScreen}
        />
        <Screen
          name="Details"
          component={DetailsScreen}
        />
      </Navigator>
    </NavigationContainer>
  )
}