import { useState } from "react";

function ExpenseForm({ addTransaction }) {
const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");
const [type, setType] = useState("expense");
const [category, setCategory] = useState("Food");

const submitHandler = () => {
if (!title || !amount) {
alert("Please fill all fields");
return;
}

addTransaction({
id: Date.now(),
title,
amount: Number(amount),
type,
category,
});

setTitle("");
setAmount("");
};

return (
<div>
<input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
<input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
<select value={type} onChange={e => setType(e.target.value)}>
<option value="income">Income</option>
<option value="expense">Expense</option>
</select>
<select value={category} onChange={e => setCategory(e.target.value)}>
  <option>Food</option>
  <option>Travel</option>
  <option>Rent</option>
  <option>Shopping</option>
  <option>Others</option>
</select>
<button onClick={submitHandler}>Add</button>
</div>
);
}

export default ExpenseForm;