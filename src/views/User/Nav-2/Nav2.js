import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Space, Layout, Button, Row } from 'antd';
import Breadcrumbs from 'components/Breadcrumb';
import { PlusCircleOutlined } from '@ant-design/icons';
import { index } from 'services/item';
import style from "assets/style/BaseLayout/layout.module.css"

const Nav2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await index();
      const result = response.data.data.map(item => ({ ...item, key: item.id }));
      setData(result);
    }
    fetchItem();
  }, []);

  const navigate = useNavigate();
  const toCreate = () => {
    navigate("/nav-2/create");
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "itemName",
    },
    {
      title: "Color",
      dataIndex: "itemColor",
    },
    {
      title: "Quantity",
      dataIndex: "itemQty",
    },
    {
      title: "Description",
      dataIndex: "itemDescription",
    },
    {
      title: 'Action',
      render: (text, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const bItems = [
    { name: "Home", to: "/" },
    { name: "Nav 2", to: "/nav-2" }
  ]
  return (
    <>
      <Breadcrumbs title="List Items" items={bItems} />
      <Layout.Content
        className={style["site-layout-background"]}
        style={{
          margin: "18px 18px 0px 18px",
          padding: 12
        }}
      >
        <Row style={{ marginBottom: "20px" }} justify='end'>
          <Button onClick={toCreate} type="primary" icon={<PlusCircleOutlined />}>
            Add
          </Button>
        </Row>
        <Table columns={columns} dataSource={data} />
      </Layout.Content>
    </>
  );
};

export default Nav2;
