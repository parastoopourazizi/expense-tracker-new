// src/components/ExpenseForm.tsx
import React, { useState } from "react";
import { Expense } from "../types";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedAmount = Number(amount);

    if (!title.trim() || !date || !parsedAmount || parsedAmount <= 0) {
      alert("عنوان، تاریخ و مبلغ معتبر (>0) الزامی است.");
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      title: title.trim(),
      amount: parsedAmount,
      date,
    };

    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "16px 0", textAlign: "center" }}>
      <input
        placeholder="عنوان هزینه"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: 8, margin: 4 }}
      />
      <input
        type="number"
        min="0"
        placeholder="مبلغ"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: 8, margin: 4, width: 120 }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: 8, margin: 4 }}
      />
      <button type="submit" style={{ padding: "8px 14px", margin: 4, cursor: "pointer" }}>
        افزودن
      </button>
    </form>
  );
};

export default ExpenseForm;
