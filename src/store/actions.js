export const Success_Login = (userInfo) => ({
    type: 'LOGIN_SUCCESS',
    userInfo
})

export const is_Login = (flag) => ({
    type: 'IS_LOGIN',
    is_login: flag
})