import { Layout } from "antd";
import Navbar from "../UI/Common/Navbar";
const { Content } = Layout;

const RootLayout = ({ children }) => {
  return (
    <div>
      <Layout className="layout">
        <Navbar />
        <Content>
          <div
            className="site-layout-content"
            style={{
              padding: "0 24px",
              minHeight: "100vh",
            }}
          >
            {children}
          </div>
        </Content>
        This is Footer
      </Layout>
    </div>
  );
};

export default RootLayout;
