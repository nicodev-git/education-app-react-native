import { AsyncStorage } from 'react-native'
import { USER, COMMON } from '../../config/types'


export const storeAsyncUserData = async (user, password) => {
  try {
    await AsyncStorage.setItem('is_authed', 'true')
    await AsyncStorage.setItem('authedUser', JSON.stringify(user))
    await AsyncStorage.setItem('password', password)
    return true
  } catch (error) {
    return false
  }
}


export const getAsyncUserData = async () => {
  try {
    let is_authed = await AsyncStorage.getItem('is_authed')
    let user = await AsyncStorage.getItem('authedUser')
    let password = await AsyncStorage.getItem('password')
    user = JSON.parse(user || {})
    return { is_authed, user, password }
  } catch (error) {
    return false
  }
}

export const removeAsyncUserData = async () => {
  try {
    await AsyncStorage.removeItem('is_authed')
    await AsyncStorage.removeItem('authedUser')
    await AsyncStorage.removeItem('password')
    return true
  } catch (error) {
    throw error
  }
}


export const signIn = (email, password) => {
  return (dispatch) => {
    
  }
}


export const signUp = (email, password) => {
  return (dispatch) => {
    
  }
}


export const checkAuthed = () => {
  return (dispatch) => {
    
  }
}

export const signOut = () => {
  return (dispatch) => {
    
  }
}