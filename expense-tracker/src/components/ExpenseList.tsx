// src/components/ExpenseList.tsx
import React from "react";
import { Expense } from "../types";
console.log("Expense from types:", Expense);

interface ExpenseListProps {
  expenses: Expense[];
  onRemove?: (id: number) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onRemove }) => {
  const total = expenses.reduce((s, e) => s + e.amount, 0);

  if (expenses.length === 0) {
    return <p style={{ textAlign: "center", opacity: 0.8 }}>هنوز هزینه‌ای ثبت نشده.</p>;
  }

  return (
    <div>
      <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
        {expenses.map((exp) => (
          <div
            key={exp.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>{exp.title}</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>{new Date(exp.date).toLocaleDateString()}</div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ fontWeight: 700 }}>{exp.amount.toLocaleString()} تومان</div>
              {onRemove && (
                <button onClick={() => onRemove(exp.id)} style={{ cursor: "pointer" }}>
                  حذف
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ textAlign: "right", marginTop: 12 }}>جمع کل: {total.toLocaleString()} تومان</h3>
    </div>
  );
};

export default ExpenseList;
