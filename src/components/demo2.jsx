import React from "react";
import { UserOutlined, LinkOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, ConfigProvider } from "antd";
import CustomCarousel from "./getCarousel";
import CustomCard from "./Card";
import Accordion from "./accordion";
import "./styles.css";
import { Typography } from "antd";
const { Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const items1 = [
  { key: "1", label: <Text strong>Home</Text> },
  { key: "2", label: <Text strong>Judges</Text> },
  { key: "3", label: <Text strong>Staff</Text> },
  { key: "4", label: <Text strong>Police Stations</Text> },
  { key: "5", label: <Text strong>Courts</Text> },
  { key: "6", label: <Text strong>Release Writ</Text> },
  { key: "7", label: <Text strong>Judgements</Text> },
  { key: "8", label: <Text strong>CFMS-DC</Text> },
  { key: "9", label: <Text strong>Photo Gallery</Text> },
  { key: "10", label: <Text strong>Contact</Text> },
];

const items2 = [UserOutlined, LinkOutlined].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label:
      key === "1" ? (
        <Text strong>Navigations</Text>
      ) : (
        <Text strong>Important Links</Text>
      ),
    children:
      key === "1"
        ? [
            { key: "1", label: <Text>Public Awareness</Text> },
            { key: "2", label: <Text>Case Search</Text> },
            { key: "3", label: <Text>Meeting Minutes</Text> },
            { key: "4", label: <Text>Archives</Text> },
            { key: "5", label: <Text>Downloads</Text> },
            { key: "6", label: <Text>School Committee</Text> },
            { key: "7", label: <Text>Complaint Box</Text> },
          ]
        : [
            { key: "8", label: <Text>Supreme Court of Pakistan</Text> },
            { key: "9", label: <Text>High Court of Sindh</Text> },
            { key: "10", label: <Text>Lahore High Court</Text> },
            { key: "11", label: <Text>Advocates Enrolment List</Text> },
            { key: "12", label: <Text>Pakistan Law Site</Text> },
            { key: "13", label: <Text>More Links...</Text> },
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
          colorPrimary: "#008000",
          colorBgContainer: "white",
          colorBgElevated: "#f0f2f5",
          fontFamily: "Open Sans",
          colorText: "black",
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
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items1}
            style={{
              flex: 1,
              minWidth: "100%",
              alignContent: "center",
              justifyContent: "center",
            }}
            className="custom-menu"
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
              width={250}
              breakpoint="sm,xs"
            >
              <Menu
                mode="inline"
                defaultOpenKeys={["sub1"]}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                items={items2}
                theme="light"
                className="custom-menu"
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  overflow: "hidden",
                  paddingRight: "10px",
                }}
              >
                <img
                  src="images/court.png"
                  alt="court-logo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <p>
                  Office of the District & Sessions Judge, Sukkur Road,
                  Shikarpur Sindh.
                  <br />
                  Phone # +92-726-920121 Fax # +92-726-920123
                  <br />
                  Email: djshikarpur@sindhhighcourt.gov.pk
                  <br />
                  Web: www.districtcourtssindh.gos.pk/Shikarpur/
                </p>
              </div>
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
