import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Statistic, Tag } from "antd";
import dayjs from "dayjs";
import { CardModel } from "../../models/CardModel";

const { Meta } = Card;

export interface CreditCardProps extends CardModel {}

const CreditCard: React.FC<CreditCardProps> = (props) => {
  const firstLetter = props.name.slice(0, 1);
  return (
    <Card
      style={{ width: "100%" }}
      actions={[<EditOutlined key="edit" />, <DeleteOutlined key="setting" />]}
    >
      <Meta
        avatar={
          <Avatar style={{ backgroundColor: props.color }}>
            {firstLetter}
          </Avatar>
        }
        title={props.name}
        description={
          <>
            <Statistic
              title="Next due date"
              value={props.nOfDueDate}
              formatter={(v) => `${v}/${dayjs().format("MM")}`}
              prefix={<CalendarOutlined />}
            />
            <Tag>Statement date : {props.statementDate.format("DD")}</Tag>
          </>
        }
      />
    </Card>
  );
};

export default CreditCard;
