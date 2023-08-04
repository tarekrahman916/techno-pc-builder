import { Button, Layout, Menu, Drawer, Dropdown, Space } from "antd";
const { Header } = Layout;
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      label: <Link href="https://www.antgroup.com">CPU / Processor</Link>,
    },
    {
      label: <Link href="https://www.antgroup.com">Motherboard</Link>,
    },
    {
      label: <Link href="https://www.antgroup.com">RAM</Link>,
    },
    {
      label: <Link href="https://www.antgroup.com">Power Supply Unit</Link>,
    },
    {
      label: <Link href="https://www.antgroup.com">Storage Device</Link>,
    },
    {
      label: <Link href="https://www.antgroup.com">Storage Device</Link>,
    },
    {
      label: <Link href="https://www.antgroup.com">Others</Link>,
    },
  ];

  return (
    <div
      style={{ position: "fixed", top: "0px", width: "100vw", zIndex: "50" }}
    >
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                padding: "5px 10px",
                borderRadius: "3px",
                fontSize: "24px",
              }}
            >
              TechNeto PC Builder
            </Link>
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Menu
            mode="vertical"
            style={{ border: "0px" }}
            className={[styles.menu_items, styles.mobileHidden]}
          >
            <Link href="/">
              <items>Home</items>
            </Link>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a
                style={{ margin: "0px 25px" }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  Categories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link href="/about">
              <items>About Us</items>
            </Link>
            <Link href="/contact">
              <Button
                type="primary"
                style={{
                  margin: "0px 25px",
                }}
              >
                PC Builder
              </Button>
            </Link>
          </Menu>
          <Button
            className={styles.mobileVisible}
            style={{ padding: "5px 10px", borderRadius: "3px", border: "0px" }}
            onClick={showDrawer}
          >
            <MenuUnfoldOutlined />
          </Button>
        </div>
        <Drawer title="Close" placement="right" onClose={onClose} open={open}>
          <Menu
            mode="horizontal"
            style={{ border: "0px", display: "flex", flexDirection: "column" }}
          >
            <Link href="/allNews">
              <items>Home</items>
            </Link>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Categories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link href="/about">
              <items>About Us</items>
            </Link>
            <Link href="/pc-builder">
              <Button type="primary">PC Builder</Button>
            </Link>
          </Menu>
        </Drawer>
      </Header>
    </div>
  );
};

export default Navbar;
