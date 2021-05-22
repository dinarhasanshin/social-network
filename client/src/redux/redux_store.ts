import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {auth_reducer}  from "./auth_reducer";
import thunkMiddleWare, {ThunkAction} from 'redux-thunk';
import { save, load } from "redux-localstorage-simple"

let rootReducer = combineReducers({
    AuthReducer: auth_reducer,
});

type RootReducerType = typeof rootReducer // (globalstate: AppStateType) => AppStateType

export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType <A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Проверить на работоспособность redux-localstorage
const store = createStore(rootReducer, load({ states: ["AuthReducer"] }), composeEnhancers(applyMiddleware(thunkMiddleWare, save({ states: ["AuthReducer"] }))));

export default store;