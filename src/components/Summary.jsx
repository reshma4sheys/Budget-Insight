function Summary({ transactions }) {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="summary">
      <div className="card">
        <h3>Income</h3>
        <p>₹ {income}</p>
      </div>
      <div className="card">
        <h3>Expense</h3>
        <p>₹ {expense}</p>
      </div>
      <div className="card">
        <h3>Balance</h3>
        <p>₹ {income - expense}</p>
      </div>
    </div>
  );
}

export default Summary;
