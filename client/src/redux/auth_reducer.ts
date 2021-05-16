import {ProfileType} from "../../types/types";
import {BaseThunkType} from './redux_store';
import {InferActionsType} from './redux_store';
import {authAPI} from '../api/api'
import { useAuth } from "../hooks/auth.hook";


let initialState = {
    userId: null as (string | null),
    token: null as (string | null)
}

type InitialStateType = typeof initialState

export const auth_reducer = (state = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {

        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;

    }
}

type ActionTypes = InferActionsType< typeof actions>

export const actions = {
    setAuthUserData: (userId: string, token: string) =>
        ({type: 'SET_USER_DATA', data: {userId, token}} as const),
}




type ThunkActionTypes = BaseThunkType<ActionTypes>


// export const userAuth = (): ThunkActionTypes => async (dispatch) => {
//     let data = await authAPI.getAuth();

//     if (data.resultCode === ResultCodesEnum.Success) {
//         let {id, login, email} = data.data;
//         dispatch(actions.setAuthUserData(id, login, email, true));
//     }
// }

export const authSignUp = (email: string, password: string, firstName: string, lastName: string, birthDay: string): ThunkActionTypes => async (dispatch) => {
    let data = await authAPI.signUp(email, password, firstName, lastName, birthDay)
}

export const authSignIn = (email: string, password: string): ThunkActionTypes => async (dispatch) => {
    let data = await authAPI.signIn(email, password)
    if (data){
        dispatch(actions.setAuthUserData(data.token, data.userId))
    }
}

// }
// export const authLogout = (): ThunkActionTypes => async (dispatch) => {
//     let data = await authAPI.logout();

//     if (data.resultCode === 0){
//         dispatch(actions.setAuthUserData(null, null, null, false));
//         dispatch(actions.setCaptchaUrl(null));
//     }
// }

// export const getCaptchaUrl = (): ThunkActionTypes => async (dispatch) => {
//     let data = await securityAPI.getCaptchaUrl();
//     if(data){
//         dispatch(actions.setCaptchaUrl(data.url))
//     }
//         /*dispatch(actions.setCaptchaUrl(data.url));*/
// }

// export const setAuthUserProfile = (userId: number): ThunkActionTypes => async (dispatch) => {
//     let data = await profileAPI.getProfile(userId);
//     dispatch(actions.setAuthProfile(data));
// }

export default auth_reducer;