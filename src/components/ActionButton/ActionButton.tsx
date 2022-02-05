import { CreditCardOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./styles.css";

const ActionButton: React.FC = (props) => {
  return (
    <Button
      className="action-base-button"
      type="primary"
      shape="round"
      icon={<CreditCardOutlined className="action-icon-button" />}
    >
      <span className="action-label-button">Add Card</span>
    </Button>
  );
};

export default ActionButton;
