import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Breadcrumb from '../../components/Breadcrumb';
import style from "../../assets/style/BaseLayout/layout.module.css";


const { Header, Sider, Content, Footer } = Layout;

const BaseLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { pathname } = location;

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={style.logo}>
          APP JOS
        </div>
        <Menu theme='dark' mode="inline" defaultSelectedKeys={[pathname === "/" ? "/nav-2" : pathname]}>
          <Menu.Item style={{ marginTop: 0 }} key="/nav-1" icon={<UserOutlined />}>
            <Link to="/nav-1">
              nav 1
            </Link>
          </Menu.Item>
          <Menu.Item key="/nav-2" icon={<VideoCameraOutlined />}>
            <Link to="/nav-2">
              nav 2
            </Link>
          </Menu.Item>
          <Menu.Item key="/nav-3" icon={<UploadOutlined />}>
            <Link to="/nav-3">
              nav 3
            </Link>
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout className={style["site-layout"]} style={{ minHeight: "100vh" }}>
        <Header className={style.header}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: style.trigger,
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Breadcrumb />
        <Content
          className={style["site-layout-background"]}
          style={{
            margin: '16px 16px 0px 16px',
            padding: 24,
          }}
        >
          <Outlet />
          Content
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}


export default BaseLayout;