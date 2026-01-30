function ExpenseList({ transactions, deleteTransaction }) {
  return (
    <ul style={{ padding: 0 }}>
      {transactions.map(t => (
        <li key={t.id} className="list-item">
          <span>
            {t.title} – ₹{t.amount} ({t.category})
          </span>
          <button onClick={() => deleteTransaction(t.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;