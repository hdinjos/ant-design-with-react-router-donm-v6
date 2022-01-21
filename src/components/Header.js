import React, { useContext } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { CollapsedContext } from '../views/Layout/CollapsedContext';
import style from "../assets/style/BaseLayout/layout.module.css";

const Header = () => {
  const { collapsed, setCollapsed } = useContext(CollapsedContext);
  return (
    <Layout.Header className={style.header}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: style.trigger,
        onClick: () => setCollapsed(!collapsed),
      })}
    </Layout.Header>
  );
};

export default Header;
