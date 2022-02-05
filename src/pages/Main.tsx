import dayjs from "dayjs";
import CreditCard from "../components/CreditCard/CreditCard";
import MainLayout from "../components/MainLayout/MainLayout";
import { useRandomColor } from "../hooks/useRandomColor/useRandomColor";
import { CardModel } from "../models/CardModel";

const MOCK: CardModel[] = [
  {
    name: "SCB",
    statementDate: dayjs(),
    expired: {
      month: 12,
      year: 2022,
    },
    nOfDueDate: 15,
  },
  {
    name: "Krungsri",
    statementDate: dayjs(),
    expired: {
      month: 11,
      year: 2026,
    },
    nOfDueDate: 25,
  },
  {
    name: "KTC",
    statementDate: dayjs(),
    expired: {
      month: 11,
      year: 2026,
    },
    nOfDueDate: 0,
  },
].map((e) => ({ ...e, color: useRandomColor() }));

const Main: React.FC = () => {
  return (
    <MainLayout>
      {MOCK.map((e) => (
        <CreditCard {...e} />
      ))}
    </MainLayout>
  );
};

export default Main;
