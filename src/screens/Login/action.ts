import { Alert } from "react-native"
import { MaskService } from "react-native-masked-text"
import AsyncStorage from "@react-native-community/async-storage"
import axios from "axios"

type Login = (
  phone: string,
  setLoginLoading: (v: boolean) => void,
  loadAuthProvider: React.Dispatch<React.SetStateAction<boolean>>
) => Promise<void>

const validateNumber = (phone: string) => {
  const isValid = MaskService.isValid('cel-phone', phone)

  if (isValid) {
    Alert.alert('Success', 'The number you entered is correct')
  } else {
    Alert.alert('Error', 'The number you entered is incorrect')
  }

  return isValid
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

export const login: Login = async (phone, setLoginLoading, loadAuthProvider) => {
  try {
    setLoginLoading(true)

    validateNumber(phone)
    // await setUser()
    // await loadAuthProvider()

    setLoginLoading(false)
  } catch (error) {
    console.log(error)
    let message = 'An unexpected error has occurred'

    Alert.alert('Error', message)
    setLoginLoading(false)
  }
}