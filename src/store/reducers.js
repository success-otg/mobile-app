import localStorage from '../utils/localStorage'

export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setAge(30 * 60 * 1000).set('userInfo', action.userInfo)
      return state = action.userInfo
    default:
      return state
  }
}

export const is_Login = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return state = action.is_login
    default:
      return state
  }
}