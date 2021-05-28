import {FETCH_USER} from '../Constants/action-type';

export const getUser = (user) => ({
    type:FETCH_USER,
    user,
})