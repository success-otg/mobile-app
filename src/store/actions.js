//用户登录时把用户信息传到reducers
export const Success_Login = (userInfo) => ({
    type: 'LOGIN_SUCCESS',
    userInfo
})

//用户登录时存储用户已登录状态
export const is_Login = (flag) => ({
    type: 'IS_LOGIN',
    is_login: flag
})