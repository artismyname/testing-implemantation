import React from 'react'
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'

import styles from './styles'

interface Props {
  title: string
  action?: () => void
  style?: StyleProp<ViewStyle>
}

export default function DefaultButton({ title, action, style }: Props) {
  return (
    <TouchableOpacity onPress={action} style={[style, { backgroundColor: '#007FBB' }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
