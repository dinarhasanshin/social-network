import React, { useState } from "react";
import "./App.less";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { SignIn } from "./components/AuthPage/SignIn";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./hooks/routes.hook";
import { useSelector } from "react-redux";
import { AppStateType } from "./redux/redux_store";

const { Header, Sider, Content, Footer } = Layout;
export const App = () => {
  const AuthReducer = useSelector((state: AppStateType) => state.AuthReducer)

  const isAuthenticated: boolean = !!AuthReducer.token;

  const routes = useRoutes(isAuthenticated);

  // if (!ready) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>{routes}</>
    // <SignIn />

    //   <Layout>
    //   <Sider
    //     breakpoint="lg"
    //     collapsedWidth="0"
    //     onBreakpoint={broken => {
    //       console.log(broken);
    //     }}
    //     onCollapse={(collapsed, type) => {
    //       console.log(collapsed, type);
    //     }}
    //   >
    //     <div className="logo" />
    //     <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    //       <Menu.Item key="1" icon={<UserOutlined />}>
    //         Профиль
    //       </Menu.Item>
    //       <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
    //         Друзья
    //       </Menu.Item>
    //       <Menu.Item key="3" icon={<MessageOutlined />}>
    //         Сообщения
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    //   <Layout>
    //     <Header className="header" style={{ padding: 0 }} />
    //     <Content style={{ margin: '24px 16px 0', minHeight: '100vh'}}>
    //       <div className="content" style={{ padding: 24, minHeight: 360 }}>
    //         content
    //       </div>
    //     </Content>
    //   </Layout>
    // </Layout>
  );
};
