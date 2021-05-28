import {types} from '../Constants/action-type';

export const createUser = (user) =>({
    type:types.CREATE_USER,
    user,
})