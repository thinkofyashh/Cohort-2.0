import RevenueCard from "./components/RevenueCard";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <>
    <div className="grid grid-cols-3">
    <RevenueCard title={"Amount Pending"} amount={"92312.20"} count={"13"}></RevenueCard>
    <RevenueCard title={"Amount Pending"} amount={"92312.20"} count={"13"}></RevenueCard>
    <RevenueCard title={"Amount Pending"} amount={"92312.20"} count={"13"}></RevenueCard>
    <RevenueCard title={"Amount Pending"} amount={"92312.20"} count={"13"}></RevenueCard>
    </div>
      
    </>
  );
}

export default App;