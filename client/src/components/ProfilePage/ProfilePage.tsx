import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux_store";
import { clear } from "redux-localstorage-simple";
import { useHistory } from "react-router";
import s from "./ProfilePage.module.css";
import ProfileBackground from "../../assets/img/profile-bg.jpg";
import ProfileImage from "../../assets/img/profile-img.png";

import { Breadcrumb, Layout, Menu, Dropdown, Avatar, Button } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  UsergroupAddOutlined,
  DownOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { PostForm } from "./PostFrom/PostFrom";

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
        <a href="/signIn" onClick={ExitTest}>
          Выход
        </a>
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
        <Header
          className={s.header}
          style={{
            paddingRight: "25px",
            overflow: "auto",
            width: "100%",
            position: "fixed",
            zIndex: 100,
            top: 0,
          }}
        >
          <Dropdown overlay={menu} placement="topLeft">
            <span className={s.user_drop_down}>
              <Avatar
                size={40}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <span style={{ marginLeft: 10 }}>Динар</span>
            </span>
          </Dropdown>
        </Header>
        <Layout style={{ marginLeft: 185, marginRight: 185, marginTop: 35 }}>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              paddingTop: 40,
              left: 0,
            }}
            theme="light"
          >
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
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
          <Content style={{ margin: "24px 16px 0", minHeight: "100vh" }}>
            <div className={s.container}>
              <div className={s.profile_header}>
                <div className={s.profile_header_background}>
                  <img src={ProfileBackground} alt="" />
                </div>
                <div className={s.profile_header_user}>
                  <div className={s.profile_header_user_img}>
                    <img src={ProfileImage} alt="" />
                  </div>
                  <div className={s.profile_header_user_name}>
                    Динар Хасаншин
                  </div>
                </div>
                <div className={s.profile_header_content}>
                  <div className={s.profile_header_content_contacts}>
                    <FacebookOutlined style={{ fontSize: "26px" }} />
                    <InstagramOutlined style={{ fontSize: "26px" }} />
                    <TwitterOutlined style={{ fontSize: "26px" }} />
                    <YoutubeOutlined style={{ fontSize: "26px" }} />
                    <LinkedinOutlined style={{ fontSize: "26px" }} />
                  </div>
                  <div className={s.profile_header_content_middle}></div>
                  <div className={s.profile_header_content_userData}>
                    <div className={s.content_userData}>
                      <span>Посты</span>
                      <span>690</span>
                    </div>
                    <div className={s.content_userData}>
                      <span>Подписчики</span>
                      <span>206</span>
                    </div>
                    <div className={s.content_userData}>
                      <span>Подписки</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.profile_menu}>
                <Header style={{ padding: 0, borderRadius: "7px" }}>
                  <Menu
                    theme="dark"
                    style={{ borderRadius: "7px" }}
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                  >
                    <Menu.Item
                      key="1"
                      style={{
                        width: "25%",
                        textAlign: "center",
                        borderRadius: "7px",
                      }}
                    >
                      Лента
                    </Menu.Item>
                    <Menu.Item
                      key="2"
                      style={{
                        width: "25%",
                        textAlign: "center",
                        borderRadius: "7px",
                      }}
                      disabled
                    >
                      О себе
                    </Menu.Item>
                    <Menu.Item
                      key="3"
                      style={{
                        width: "25%",
                        textAlign: "center",
                        borderRadius: "7px",
                      }}
                      disabled
                    >
                      Друзья
                    </Menu.Item>
                    <Menu.Item
                      key="4"
                      style={{
                        width: "25%",
                        textAlign: "center",
                        borderRadius: "7px",
                      }}
                      disabled
                    >
                      Фотографии
                    </Menu.Item>
                  </Menu>
                </Header>
              </div>
              <div className={s.profile_content}>
                <div className={s.profile_content_left}></div>
                <div className={s.profile_content_right}>
                  <PostForm />
                </div>
              </div>
            </div>
          </Content>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              paddingTop: 40,
              right: 0,
            }}
            theme="light"
          >
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
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
        </Layout>
      </Layout>
    </>
  );
};
