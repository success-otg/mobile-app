import {createStore, combineReducers} from "redux"
import {userInfo, is_Login} from './reducers'

const store = createStore(combineReducers({userInfo, is_Login}))

export default store