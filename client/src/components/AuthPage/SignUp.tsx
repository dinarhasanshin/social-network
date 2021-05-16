import React from "react";
import { Form, Input, Button, Checkbox, Divider, Row, DatePicker } from "antd";
import {
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  SolutionOutlined,
  MailOutlined,
} from "@ant-design/icons";
import s from "./auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../redux/auth_reducer";
import { useAuth } from "../../hooks/auth.hook";
import { AppStateType } from "../../redux/redux_store";
import { useHistory } from "react-router";

export const SignUp = () => {

    const dispatch = useDispatch()
    const AuthReducer = useSelector((state: AppStateType) => state.AuthReducer)
    const history = useHistory()
    const {login} = useAuth()

  const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      birthDay: fieldsValue["date-picker"].format("YYYY-MM-DD"),
    };
    if(values){
        dispatch(authSignUp(values.email, values.password, values.firstName, values.lastName, values.birthDay))
        history.push('/signIn')
    }

    //TODO: Отправка POST запроса с данные для регистрации, обратно получаем User
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
          name="firstName"
          rules={[{ required: true, message: "Пожалуйста введите ваше имя" }]}
        >
          <Input
            prefix={<SolutionOutlined className="site-form-item-icon" />}
            placeholder="Имя"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            { required: true, message: "Пожалуйста введите вашу фамилию" },
          ]}
        >
          <Input
            prefix={<SolutionOutlined className="site-form-item-icon" />}
            placeholder="Фамилия"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="date-picker"
          rules={[
            {
              type: "object" as const,
              required: true,
              message: "Укажите дату рождения",
            },
          ]}
        >
          <DatePicker size="large" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Пожалуйста введите email" }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Пожалуйста введите пароль" }]}
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
          Or <a href="/signIn">SignIn now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
