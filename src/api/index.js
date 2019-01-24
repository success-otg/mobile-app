import FetchUtil from '../utils/fetch'

let fetch = new FetchUtil()

//获取二维码
export const getCode = ()=>fetch.init().setUrl('/v1/captchas').dofetch()

//登录
export const accountLogin = (username, password, captcha_code)=>fetch.init().setMethod('POST').setBody({username, password, captcha_code}).setUrl('/users/login').dofetch()

//登出
export const signout = () => fetch.init().setUrl('/users/signout').dofetch()

//上传图片
export const updateAvatar = (user_id,data) => fetch.init().setUrl(`/v1/users/${user_id}/avatar`).setMethod('POST').setBody(data).dofetch()