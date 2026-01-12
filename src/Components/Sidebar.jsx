import { Layout, Menu, Slider } from "antd";
import "./Sidebar.css";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const Sidebar = () => {
    const items = [
        {
            key: '1',
            label: 'Option 1',
        },
        {
            key: '2',
            label: 'Option 2',
        },
        {
            key: '3',
            label: 'Option 3',
        },
    ];
  return (
    <div className="sidebar">
      <Layout>
        <Sider>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default Sidebar;
