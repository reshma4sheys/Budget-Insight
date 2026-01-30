import { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Summary from "../components/Summary";

function Dashboard() {
const [transactions, setTransactions] = useState([]);

useEffect(() => {
const saved = JSON.parse(localStorage.getItem("transactions"));
if (saved) setTransactions(saved);
}, []);

useEffect(() => {
localStorage.setItem("transactions", JSON.stringify(transactions));
}, [transactions]);

const addTransaction = (transaction) => {
setTransactions([...transactions, transaction]);
};

const deleteTransaction = (id) => {
setTransactions(transactions.filter(t => t.id !== id));
};

return (
<div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
<h1>💰 Budget Insight</h1>
<Summary transactions={transactions} />
<ExpenseForm addTransaction={addTransaction} />
<ExpenseList transactions={transactions} deleteTransaction={deleteTransaction} />
</div>
);
}

export default Dashboard;
