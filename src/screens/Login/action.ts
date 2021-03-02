import { Alert } from "react-native"
import { MaskService } from "react-native-masked-text"
import AsyncStorage from "@react-native-community/async-storage"
import axios from "axios"

type Login = (
  phone: string,
  handleSetLoginLoading: (v: boolean) => void,
  loadAuthProvider: () => Promise<void>
) => Promise<void>

const validateNumber = async (phone: string) => {
  const isValid = await MaskService.isValid('cel-phone', phone)

  if (!isValid) throw 'The number you entered is incorrect'
}

const BASE_URL = `https://jsonplaceholder.typicode.com`

const setUser = async () => {
  const url = `${BASE_URL}/users/${Math.floor(Math.random() * (10 - 1) + 1)}`
  const response = await axios.get(url)

  const user = {
    username: response.data.username
  }

  await AsyncStorage.setItem('user', JSON.stringify(user))
}

export const login: Login = async (phone, handleSetLoginLoading, loadAuthProvider) => {
  try {
    handleSetLoginLoading(true)

    await validateNumber(phone)
    await setUser()
    await loadAuthProvider()

    handleSetLoginLoading(false)
  } catch (error) {
    console.log(error)
    let message = 'An unexpected error has occurred'

    switch (error) {
      case 'The number you entered is incorrect':
        message = error
        break
    }

    Alert.alert('Error', message)
    handleSetLoginLoading(false)
  }
}