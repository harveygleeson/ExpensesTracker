import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item, index) => {
        return <ExpenseItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default ExpensesList;
