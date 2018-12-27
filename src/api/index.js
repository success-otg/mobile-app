import FetchUtil from '../utils/fetch'

let fetch = new FetchUtil()

export const getCode = ()=>fetch.init().setUrl('/v1/captchas').setMethod('POST').dofetch()