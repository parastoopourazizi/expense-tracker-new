// src/App.tsx
import React, { useState } from "react";
import { Expense } from "./types";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const handleRemove = (id: number) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div style={{ padding: 20, maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>💰 Simple Expense Manager</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onRemove={handleRemove} />
    </div>
  );
};

export default App;

