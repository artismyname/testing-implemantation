import { Alert } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

type Logout = (
  handleSetAuthLoading: React.Dispatch<React.SetStateAction<boolean>>,
  loadAuthProvider: () => Promise<void>
) => Promise<void>

const removeUser = async () => await AsyncStorage.removeItem('user')

export const logout: Logout = async (setAuthLoading, loadAuthProvider) => {
  try {
    setAuthLoading(true)

    await removeUser()
    await loadAuthProvider()

    setAuthLoading(false)
  } catch (error) {
    let message = 'An unexpected error has occurred'

    Alert.alert('Error', message)
    setAuthLoading(false)
  }
}