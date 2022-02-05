import { Dayjs } from "dayjs";

export type CardModel = {
  name: string;
  expired: {
    month: number;
    year: number;
  };
  statementDate: Dayjs;
  nOfDueDate: number;
  color: string;
};
