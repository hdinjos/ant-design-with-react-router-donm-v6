import React from 'react'
import { Breadcrumb, Typography } from 'antd';
import style from "../assets/style/custom/custom.module.css";

const { Title } = Typography;

const Breadcrumbs = ({ bg, children, ...props }) => {
  return (
    <div className={style['breadcrumbs']} >
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Title level={2}>
        Dashboard
      </Title>
    </div>
  )
}

export default Breadcrumbs
