import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux_store";
import { clear } from "redux-localstorage-simple";
import { useHistory } from "react-router";
import s from "./ProfilePage.module.css";

import { Breadcrumb, Layout, Menu, Dropdown, Avatar } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  UsergroupAddOutlined,
  DownOutlined,
} from "@ant-design/icons";

//Узнать, можно ли выносить const за пределы компонентов и как лучше всего

const { Header, Sider, Content, Footer } = Layout;

export const ProfilePage = () => {
  const AuthReducer = useSelector((state: AppStateType) => state.AuthReducer);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [mobile, setMobile] = useState<Boolean>(false);

  const ExitTest = () => {
    clear();
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/signIn" onClick={ExitTest}>Выход</a>
      </Menu.Item>
    </Menu>
  );

  if (mobile) {
    return (
      <>
        <Layout className={s.layout_mobile}>
          <Content>
            <div className={s.site_layout_content_mobile}>
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content.... Content.... Content.... Content....
              Content.... Content....
            </div>
          </Content>
          <Header
            className={s.header_mobile}
            style={{
              overflow: "auto",
              width: "100%",
              position: "fixed",
              bottom: 0,
            }}
          >
            <Menu
              className={s.footer_mobile}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
            >
              <Menu.Item key="1" icon={<UserOutlined />}></Menu.Item>
              <Menu.Item key="3" icon={<MessageOutlined />}></Menu.Item>
              <Menu.Item key="4" icon={<UsergroupAddOutlined />}></Menu.Item>
              <Menu.Item key="5" icon={<UsergroupAddOutlined />}></Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </>
    );
  }
  return (
    <>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          theme="dark"
        >
          <div className="logo">SocialNetwork</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Профиль
            </Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
              Друзья
            </Menu.Item>
            <Menu.Item key="3" icon={<MessageOutlined />}>
              Сообщения
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          {/* <Header style={{ padding: 0 }}>
             <Sider theme="light">
              <div className="logo" />
              <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  Профиль
                </Menu.Item>
                <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
                  Друзья
                </Menu.Item>
                <Menu.Item key="3" icon={<MessageOutlined />}>
                  Сообщения
                </Menu.Item>
              </Menu>
            </Sider>
          </Header>  */}
          <Header className={s.header} style={{ padding: "10px" }}>
            <Dropdown overlay={menu}>
              <Avatar
                size={40}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </Dropdown>
          </Header>
          <Content style={{ margin: "24px 16px 0", minHeight: "100vh" }}>
            <div className="content" style={{ padding: 24, minHeight: 360 }}>
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
