import { Col, PageHeader, Row } from "antd";
import "./styles.css";
import { CreditCardOutlined } from "@ant-design/icons";
import React from "react";
import ActionButton from "../ActionButton/ActionButton";

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
      <Row
        className="site-page-content responsive-content"
        justify="space-between"
        gutter={[8, 8]}
      >
        {React.Children.map(props.children, (e) => (
          <Col xs={24} sm={12} md={8}>
            {e}
          </Col>
        ))}
      </Row>
      <ActionButton />
    </>
  );
};

export default MainLayout;
