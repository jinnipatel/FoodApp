import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILUER,
    FETCH_USER_FAILURE
} from '../Constants/action-type';
import {pull,call, put} from 'redux-saga/effects';
import axios from 'axios';
import {log} from 'react-native-reanimated'


export function* fetchUser(payload){
    try {
        const apiConfig ={
            method:'POST',
            url:"https://reqres.in/api/login",
            data:{
                "email":"eve.holt@reqres.in",
                "password":"cityslicka"
            }
        };
        const response = yield call(axios,apiConfig)
        console.log(response.data)
        yield put({type:FETCH_USER_SUCCESS,payload:response})
    } catch (e) {
        console.log(e);
        yield put({type:FETCH_USER_FAILURE,payload:e.message})
    }
}