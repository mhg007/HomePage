import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import { Typography } from "antd";
const { Title, Text } = Typography;
const style = {
  padding:"0 24px",
  textAlign: "justify",
  display: "block"
}
const getItems = (panelStyle) => [
  {
    key: "1",
    label: <Title level={4}>A Little History</Title>,
    children: (
      <Text style={style}>
        Shikarpur Sessions court came into being on 1st December 1978. It was
        curved out of Judicial District Sukkur.It consists upon four Talukas
        viz. Shikarpur,Garhi Yasin, Khanpur and Lakhi Ghulam Shah. There are one
        court of District and Sessions Judge, five Courts of Additional District
        & Sessions Judges, Two Courts of Sr. Civil Judges/Assistant Sessions
        Judges, 07 Courts of Civil Judges, Judicial Magistrates and One Family
        court at Shikarpur, Two courts of CJ & JMs at Garhi Yasin, and one Court
        of CJ & JM at Khanpur and Lakhi.
        <br />
        <br />
        The Sessions Court Shikarpur was established in 1978, at its old
        building which is situated at starte of the court area. At the
        beginning, there was only one District & Sessions Judge who resided the
        court but with the passage of time, as the work-load increased, 05
        Additional District & Sessions Judges were also deputed for the purpose.
        An Additional District & Sessions Judge has same judicial powers as full
        District & sessions Judge excepts the Administration Powers which are
        only exercised by the District & Sessions Judge.
        <br />
        <br />
        Mr.Abdul Jabbar Bachani was the first District & Sessions Judge at
        Shikarpur, who remained at the said post w.e.f 1st December, 1978 to
        09th June, 1979. Mr. Ahmed Yar Khan was the second District & Sessions
        Judge of district Shikarpur from 10th June 1979 to 02nd June, 1980 and
        so on... Learned Mr. Inayatullah Bhutto is the present District &
        Sessions Judge who took charge of his post in the Month of September,
        2024. A complete list of former Sessions Judges of the district
        Shikarpur can be
      </Text>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: <Title level={4}>Administration</Title>,
    children: (
      <Text style={style}>
        Every organization needs to have a strong administration system to carry
        out its daily business; and Sessions Court, Shikarpur is no exception.
        We have a very well defined administration setup, divided into several
        parts (offices) which perform their assigned duties in accordance with
        law. A brief introduction of these offices are
      </Text>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: <Title level={4}>Courts in the District</Title>,
    children: (
      <Text style={style}>
        For the administration of justice, 16 Courts of Law are establised in
        District Head Quarter in Shikarpur and 04 Courts of law are established
        in the 03 Talukas of District. Every court has its own jurisdiction
        which exercises its powers, laid down by the law, for provision of
        justice to the litigants. Some details of these courts
      </Text>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: <Title level={4}>Family Court</Title>,
    children: (
      <Text style={style}>
        Section 4 of the West Pakistan Family Courts Act, 1964 provides that the
        family Courts established under Section 3 shall have exclusive
        jurisdiction to entertains
      </Text>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: <Title level={4}>Consumer Court</Title>,
    children: (
      <Text style={style}>
        Newly Established Consumer Court establshed since 12th January 2019.
      </Text>
    ),
    style: panelStyle,
  },
  {
    key: "6",
    label: <Title level={4}>History of Judicial District Shikarpur</Title>,
    children: (
      <Text style={style}>
        Shikarpur Sessions court came into being on 1st December 1978. It was
        curved out of Judicial District Sukkur.It consists upon four Talukas
        viz. Shikarpur,Garhi Yasin, Khanpur and Lakhi Ghulam Shah. There are One
        court of District and Sessions Judge
      </Text>
    ),
    style: panelStyle,
  },
];
const Accordion = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1","2","3","4"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{
        background: "white",
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default Accordion;
