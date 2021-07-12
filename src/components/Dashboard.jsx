import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";
import Toggle from "./Toggle";

const Dashboard = () => {

    return (
        <div className="dashboard">
            <Toggle/>
            <IncomeList/>
            <ExpenseList/>
        </div>
    )
}

export default Dashboard;