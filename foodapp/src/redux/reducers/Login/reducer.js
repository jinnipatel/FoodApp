import * as types from '../Constants/action-type';

const initial = {
    user:[],
}

const loginReducer = (state = initial ,action) =>{
    switch(action.type){
        case types.FETCH_USER_SUCCESS:
            return{
                ...state,
                user:action.payload,
            };
        case types.FETCH_USER_FAILURE:
            return{
                ...state,
                user:action.payload
            }
         default:
             return state;   
    }
};
export default loginReducer