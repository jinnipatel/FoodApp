import { ActionSheetIOS } from "react-native";

const initState = {
    token:loacalStorage.getItem('signup_data'),
    user:{},
    error:false
}

function loginReducer(state=initState,acttion){
    switch(action.type){
        case LOGIN_SUCCEEDED:
            return{
                ...state,
                token:action.payload.access_token,
                user:action.payload.user
            }
        case LOGIN_FAILED:
            return{
                ...state,
                error:true,
                user:{}
            }
        default:
            return state   
    }
}