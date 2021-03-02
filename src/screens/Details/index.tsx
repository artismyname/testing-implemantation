import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import styles from './styles'

export default function Detail({ route }: any) {
  const item = Number.parseInt(route.params, 10)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Showing details for {item}</Text>
      <Text style={styles.body}>the number you have chosen is {item}</Text>
    </SafeAreaView>
  )
}
