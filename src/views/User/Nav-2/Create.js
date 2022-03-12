import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Layout, Radio, Space, InputNumber, Alert } from 'antd';
import Breadcrumbs from 'components/Breadcrumb';
import { create } from 'services/item';
import style from "assets/style/BaseLayout/layout.module.css"

const Create = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      await create(values);
      setIsLoading(false);
      navigate("/nav-2");
      console.log('Success:', values);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const toList = () => {
    navigate(-1);
  };

  const bItems = [
    { name: "Home", to: "/" },
    { name: "Nav 2", to: "/nav-2" },
    { name: "Create", to: "/nav-2/create" }
  ]

  return (
    <>
      {/* <Alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        closable
      /> */}
      <Breadcrumbs title="Create Item" items={bItems} />
      <div style={
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>

        <Layout.Content
          className={style["site-layout-background"]}
          style={{
            margin: "18px 0px 0px 0px",
            padding: 12,
            width: "500px",
          }}
        >
          <Form
            style={{ marginTop: "24px" }}
            labelCol={{
              span: 4,
              offset: 4,
            }}
            wrapperCol={{
              span: 16,
              offset: 4,
            }}
            layout={"vertical"}
            onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="itemName"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}>
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
              label="Color"
              name="itemColor"
              rules={[
                {
                  required: true,
                  message: 'Please input your color!',
                },
              ]}>
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="itemDescription"
              rules={[
                {
                  required: true,
                  message: 'Please input your description!',
                },
              ]}>
              <Input.TextArea placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="itemQty"
              rules={[
                {
                  required: true,
                  message: 'Please input your quantity!',
                },
              ]}>
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Space>
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button onClick={toList} htmlType="submit">Cancel</Button>
              </Space>
            </Form.Item>
          </Form>


        </Layout.Content>
      </div>

    </>
  );
};

export default Create;
