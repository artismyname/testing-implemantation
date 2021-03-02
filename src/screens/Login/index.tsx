import React, { useState } from 'react'
import { SafeAreaView, TextInput, Text } from 'react-native'
import { MaskService } from 'react-native-masked-text'

import DefaultButton from '../../Components/DefaultButton'
import Loading from '../../Components/Loading'

import { useAuth } from '../../provider/auth.provider'
import { useLogin } from '../../provider/login.provider'
import { login } from './action'

import styles from './styles'

export default function Login({ navigation }: any) {
  const [phone, setPhone] = useState<string>('')
  const { loadAuthProvider } = useAuth()
  const { loginLoading, handleSetLoginLoading } = useLogin()

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Number</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.inputNumber}
          value={phone}
          onChangeText={text => setPhone(MaskService.toMask('cel-phone', text))}
        />
        <DefaultButton title='Submit' style={styles.button} action={() => {
          login(phone, handleSetLoginLoading, loadAuthProvider)
        }} />
      </SafeAreaView>
      {loginLoading && <Loading />}
    </>
  )
}