import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import style from "../../assets/style/BaseLayout/layout.module.css";

const { Header, Sider, Content } = Layout;

const BaseLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={style.logo}>
          APP JOS
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={style["site-layout"]} style={{ minHeight: "100vh" }}>
        <Header className={style["site-layout-background"]} style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: style.trigger,
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className={style["site-layout-background"]}
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          {(() => {
            let number = [];
            for (let i = 1; i < 100; i++) {
              number.push(i);
            }

            return number.map((num, index) => {
              return (
                <div key={index}>{num}</div>
              )
            })
          })()}
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default BaseLayout;