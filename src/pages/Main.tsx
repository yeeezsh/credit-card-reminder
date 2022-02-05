import CreditCard from "../components/CreditCard/CreditCard";
import MainLayout from "../components/MainLayout/MainLayout";

const Main: React.FC = () => {
  return (
    <MainLayout>
      <CreditCard />
      <CreditCard />
      <CreditCard />
    </MainLayout>
  );
};

export default Main;
