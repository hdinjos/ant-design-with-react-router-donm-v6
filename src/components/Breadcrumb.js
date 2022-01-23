import React from 'react'
import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import style from "../assets/style/custom/custom.module.css";

const { Title } = Typography;

const Breadcrumbs = ({ title, items, children, ...props }) => {
  return (
    <div className={style['breadcrumbs']} >
      <Breadcrumb>
        {items.map((item, i) => {
          return (
            <Breadcrumb.Item key={i}>
              <Link to={item.to}>
                {item.name}
              </Link>
            </Breadcrumb.Item>
          );
        })}
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
      <Title level={2}>
        {title}
      </Title>
    </div>
  )
}

export default Breadcrumbs
