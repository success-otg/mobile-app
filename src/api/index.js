import FetchUtil from '../utils/fetch'

let fetch = new FetchUtil()

export const getCode = ()=>fetch.init().setUrl('/v1/captchas').setMethod('POST').dofetch()

export const accountLogin = (username, password, captcha_code)=>fetch.init().setMethod('POST').setBody(username, password, captcha_code).setUrl('/users/login').dofetch()