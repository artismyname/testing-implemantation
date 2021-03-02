import { Alert } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

type Logout = (
  handleSetAuthLoading: (v: boolean) => void,
  loadAuthProvider: () => Promise<void>
) => Promise<void>

const removeUser = async () => await AsyncStorage.removeItem('user')

export const logout: Logout = async (handleSetAuthLoading, loadAuthProvider) => {
  try {
    handleSetAuthLoading(true)

    await removeUser()
    await loadAuthProvider()

    handleSetAuthLoading(false)
  } catch (error) {
    let message = 'An unexpected error has occurred'

    Alert.alert('Error', message)
    handleSetAuthLoading(false)
  }
}