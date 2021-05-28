import {types} from '../Constants/action-type';

const inital = {
    signResponse:[],
    loader:false
};

const signupReducer = (state = inital,action) =>{
    switch(action.type){
        case types.CREATE_USER:
            return{
                ...state,
                loader:true,
                signResponse:action.payload,

            };
        case types.CREATE_USER_SUCCESS:
            return{
                ...state,
                loader:false,
                signResponse:action.payload.data,
            };
        case types.CREATE_USER_FAILURE:
            return{
                ...state,
                loader:false,
                signResponse:action.payload
                
            };
        default:
            return state;        
           
    }
}

export default signupReducer;