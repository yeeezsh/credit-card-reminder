import { PageHeader, Row } from "antd";
import "./styles.css";
import { CreditCardOutlined } from "@ant-design/icons";

const MainLayout: React.FC = (props) => {
  return (
    <>
      <Row>
        <PageHeader
          className="site-page-header"
          title="Credit Card Reminder"
          onBack={() => {}}
          backIcon={<CreditCardOutlined />}
        />
      </Row>
      <Row>{props.children}</Row>
    </>
  );
};

export default MainLayout;
