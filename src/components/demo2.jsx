import React from "react";
import { LaptopOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme,ConfigProvider } from "antd";
import CustomCarousel from "./getCarousel";
import CustomCard from "./Card";
import Accordion from "./accordion";
const { Header, Content, Footer, Sider } = Layout;

const items1 = [
  "Home",
  "Judges",
  "Staff",
  "PoliceStations",
  "Courts",
  "Release Writ",
  "Judgements",
  "CFMS-DC",
  "Photo Gallery",
  "Contact",
].map((key) => ({
  key,
  label: key,
}));

const items2 = [UserOutlined, LaptopOutlined].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: key === "1" ? `Navigations` : `Important Links`,
    children:
      key === "1"
        ? [
            { key: "1", label: "Public Awareness" },
            { key: "2", label: "Case Search" },
            { key: "3", label: "Meeting Minutes" },
            { key: "4", label: "Archives" },
            { key: "5", label: "Downloads" },
            { key: "6", label: "School Committee" },
            { key: "7", label: "Complaint Box" },
          ]
        : [
            { key: "8", label: "Supreme Court of Pakistan" },
            { key: "9", label: "High Court of Sindh" },
            { key: "10", label: "Lahore High Court" },
            { key: "11", label: "Advocates Enrolment List" },
            { key: "12", label: "Pakistan Law Site" },
            { key: "13", label: "More Links..." },
          ],
  };
});

const MainPage2 = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <ConfigProvider
    theme={{
        token: {
          colorPrimary: "#52c41a", // Green primary color
          colorBgContainer: "#f0f2f5", // Light background
          colorTextBase: "#000", // Text color
          colorMenuBackground: "#F5F5F7", // Menu background (dark blue)
          colorMenuItemHover: "#1890ff", // Hover color for menu items
        },
      }}
    >
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              width: "100%",
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["Home"]}
              items={items1}
              style={{
                flex: 1,
                minWidth: "100%",
                alignContent: "center",
                justifyContent: "center",
              }}
            />
          </Header>
          <Content
            style={{
              padding: "0 10px",
            }}
          >
            <CustomCarousel />
            <Layout
              style={{
                padding: "24px 0",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Sider
                style={{
                  background: colorBgContainer,
                }}
                width={200}
              >
                <Menu
                  mode="inline"
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                  }}
                  items={items2}
                  theme="dark"
                />
              </Sider>
              <Content
                style={{
                  padding: "0 24px",
                  minHeight: 280,
                  display: "flex",
                }}
              >
                <div style={{ flex: 4, paddingRight: "24px" }}>
                  {" "}
                  <Accordion />
                </div>
                <div style={{ flex: 1 }}>
                  {" "}
                  <CustomCard />
                </div>
              </Content>
            </Layout>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "#001529",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "start",
                padding: "10px 50px 10px 50px",
                color: "white",
              }}
            >
              <div>
                <p>
                  Office of the District & Sessions Judge, Sukkur Road, Shikarpur
                  Sindh.
                  <br />
                  Phone # +92-726-920121 Fax # +92-726-920123
                  <br />
                  Email: djshikarpur@sindhhighcourt.gov.pk
                  <br />
                  Web: www.districtcourtssindh.gos.pk/Shikarpur/
                </p>
              </div>
              <div>
                <p>Map to the Sessions Court, Shikarpur [click to enlarge]</p>
              </div>
            </div>
            <div
              style={{
                color: "#52c41a",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <p>@ All rights reserved - District Judiciary Shikarpur</p>
            </div>
          </Footer>
        </Layout>
    </ConfigProvider>
  );
};

export default MainPage2;
