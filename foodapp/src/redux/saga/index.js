import {FETCH_USER,types} from '../reducers/Constants/action-type'
import {takeEvery} from 'redux-saga/effects'
import {fetchUser } from '../reducers/Login/saga'
import { createUsers } from '../reducers/Signup/saga'

export default function* rootSaga(){
    yield takeEvery(FETCH_USER,fetchUser)
    yield takeEvery(types.CREATE_USER,createUsers)
}