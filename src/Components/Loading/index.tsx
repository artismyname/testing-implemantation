import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import styles from './styles'

export default function Loading() {
  return (
    <View testID='ActivityIndicator' style={styles.container}>
      <ActivityIndicator size='large' color='#007FBB' />
    </View>
  )
}