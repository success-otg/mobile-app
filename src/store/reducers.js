import localStorage from '../utils/localStorage'

//存储用户信息
export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setAge(8 * 60 * 60 * 1000).set('userInfo', action.userInfo)
      return state = action.userInfo
    default:
      return state
  }
}

//存储登录状态
export const is_Login = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return state = action.is_login
    default:
      return state
  }
}