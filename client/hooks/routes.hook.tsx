import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { SignIn } from '../src/components/AuthPage/SignIn'

export const useRoutes = (isAuthenticated: boolean) => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path="/profile">
                    /* ProfilePage */
                </Route>
                <Route path="/peoples">
                    /* PeoplesPage */
                </Route>
                <Route path="/messages">
                    /* MessagesPage */
                </Route>
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path="/signIn">
                <SignIn />
            </Route>
            <Route path="/signUp">
                /* SignUp */
            </Route>
            <Redirect to="/signIn"/>
        </Switch>
    )
}