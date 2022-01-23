import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
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
          <Content
            style={{
              margin: '64px 0px 0px 0px',
            }}
          >
            <Outlet />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </CollapsedContextProvider >

  );
}


export default BaseLayout;