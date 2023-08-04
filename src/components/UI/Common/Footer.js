import { Layout, FloatButton } from "antd";
const { Footer } = Layout;
import {
  FacebookOutlined,
  LinkedinOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const FooterPage = () => {
  return (
    <div>
      <Footer
        className={styles.footer}
        style={{
          textAlign: "center",
          color: "white",
          height: "250px",
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <h2
            style={{
              fontSize: "35px",
            }}
          >
            TechNeto PC Builder
          </h2>
          <div className={styles.line}></div>
          <p className={styles.social_icons}>
            <Link href="https://web.facebook.com/groups/programmingherocommunity">
              <FacebookOutlined style={{ color: "white" }} />
            </Link>
            <Link href="www.twitter.com">
              <TwitterOutlined style={{ color: "white" }} />
            </Link>
            <Link href="https://web.programming-hero.com/home/">
              <GoogleOutlined style={{ color: "white" }} />
            </Link>
            <Link href="www.linkedin.com">
              <LinkedinOutlined style={{ color: "white" }} />
            </Link>
          </p>
          TechNeto Pc Builder ©2023 Created by Techneto_IT
          <FloatButton.BackTop />
        </div>
      </Footer>
    </div>
  );
};

export default FooterPage;
