import React from "react";
import { Form, Input, Button, Checkbox, Divider, Row } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import s from "./auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";
import { AppStateType } from "../../redux/redux_store";
import { authSignIn } from "../../redux/auth_reducer";

export type SingUpFormType = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector((state: AppStateType) => state.AuthReducer);
  const history = useHistory();
  const { login } = useAuth();

  const onFinish = async (values: SingUpFormType) => {
    await dispatch(authSignIn(values.email, values.password));
    history.push('/profile')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={s.container}>
      <Form
        name="normal_login"
        className={s.login_form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <div className={s.logo}>
            <hr />
            <span>SocialNetwork</span>
            <hr />
          </div>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Пожалуйста введите email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Пожалуйста введите пароль!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={s.login_form_button}
          >
            Log in
          </Button>
          Or <a href="/signUp">SignUp now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
