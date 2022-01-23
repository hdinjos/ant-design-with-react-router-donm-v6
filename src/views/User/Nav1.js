import { Layout } from 'antd';
import Breadcrumbs from '../../components/Breadcrumb';
import style from "../../assets/style/BaseLayout/layout.module.css"

const Nav1 = () => {
  const bItems = [
    { name: "Home", to: "/" },
    { name: "Nav 1", to: "/nav-1" }
  ]
  return (
    <>
      <Breadcrumbs title="Nav 1" items={bItems} />
      <Layout.Content
        className={style["site-layout-background"]}
        style={{
          margin: "18px 18px 0px 18px",
          padding: 12
        }}
      >
        <h1>Nav 1</h1>
        {/* <Table columns={columns} dataSource={data} /> */}
      </Layout.Content>
    </>
  );
};

export default Nav1;
