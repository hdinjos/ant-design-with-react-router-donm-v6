import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";
import { CollapsedContext } from '../views/Layout/CollapsedContext';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import style from "../assets/style/BaseLayout/layout.module.css";

const { Sider } = Layout;

const Navbar = () => {
  const c = useContext(CollapsedContext);
  const location = useLocation();
  const { pathname } = location;

  return (
    <Sider trigger={null} collapsible collapsed={c.collapsed}>
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
  );
};

export default Navbar;
