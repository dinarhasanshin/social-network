import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/auth.hook";
import { AppStateType } from "../../redux/redux_store";

export const ProfilePage = () => {
  const { login } = useAuth();
  const AuthReducer = useSelector((state: AppStateType) => state.AuthReducer);

  useEffect(() => {
      if(AuthReducer.token && AuthReducer.userId){
        login(AuthReducer.token, AuthReducer.userId)
      }
  }, [login]);

  return <div>ProfilePage</div>;
};
