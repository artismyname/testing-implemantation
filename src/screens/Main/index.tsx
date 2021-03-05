import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import DefaultButton from '../../Components/DefaultButton'

import { useAuth } from '../../provider/auth.provider'
import { logout } from './action'

import styles from './styles'

export default function Main() {
  const user: any = ''

  const { setAuthLoading, loadAuthProvider } = useAuth()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Username: {user?.username}</Text>
      <Text style={styles.text}>Number: {user?.number}</Text>
      <DefaultButton title='Logout' style={styles.button} action={() => logout(setAuthLoading, loadAuthProvider)} />
    </SafeAreaView>
  )
}