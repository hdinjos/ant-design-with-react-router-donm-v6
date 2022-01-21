import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import Breadcrumb from '../../components/Breadcrumb';
import { CollapsedContextProvider } from './CollapsedContext';
import Navbar from "../../components/Navbar";
import Header from '../../components/Header';
import style from "../../assets/style/BaseLayout/layout.module.css";

const { Content, Footer } = Layout;

const BaseLayout = () => {

  return (
    <CollapsedContextProvider>
      <Layout>
        <Navbar />
        <Layout className={style["site-layout"]} style={{ minHeight: "100vh" }}>
          <Header />
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
    </CollapsedContextProvider>

  );
}


export default BaseLayout;