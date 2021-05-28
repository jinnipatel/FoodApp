import { combineReducers } from 'redux'
import loginReducer from './Login/reducer'
import signupReducer from './Signup/reducer'

const rootReducer = combineReducers({
    login:loginReducer,
    signup:signupReducer
})

export default rootReducer