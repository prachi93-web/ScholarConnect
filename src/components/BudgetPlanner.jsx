import React, { useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const defaultExpenses = [
  { category: "Rent", amount: 0 },
  { category: "Groceries", amount: 0 },
  { category: "Transport", amount: 0 },
  { category: "Utilities", amount: 0 },
  { category: "Internet", amount: 0 },
  { category: "Leisure", amount: 0 },
  { category: "Others", amount: 0 },
];

function BudgetPlanner() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(defaultExpenses);

  const handleExpenseChange = (index, value) => {
    const updated = [...expenses];
    updated[index].amount = parseFloat(value) || 0;
    setExpenses(updated);
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const savings = income - totalExpenses;

  const pieData = {
    labels: expenses.map((item) => item.category),
    datasets: [
      {
        data: expenses.map((item) => item.amount),
        backgroundColor: [
          "#60A5FA", "#34D399", "#FBBF24", "#F87171", "#A78BFA", "#F472B6", "#94A3B8"
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-24 px-6">
      <style>
        {`
          /* Hide number input spinners */
          input[type='number']::-webkit-inner-spin-button,
          input[type='number']::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type='number'] {
            -moz-appearance: textfield;
          }
        `}
      </style>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          🎓 Student Budget Planner
        </h1>

        {/* Income Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Income (₹)
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
            placeholder="e.g. 10000"
            className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Expense Inputs */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Expenses</h2>
        <div className="space-y-4">
          {expenses.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <label className="text-gray-600 w-1/2">{item.category}</label>
              <input
                type="number"
                value={item.amount}
                onChange={(e) => handleExpenseChange(idx, e.target.value)}
                placeholder="₹0"
                className="w-1/2 px-4 py-2 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-10 border-t pt-6 text-gray-700 space-y-3">
          <div className="flex justify-between text-base">
            <span>Total Expenses</span>
            <span>₹{totalExpenses.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold text-blue-700">
            <span>Savings</span>
            <span>₹{savings.toFixed(2)}</span>
          </div>
        </div>

        {/* Pie Chart
        {filteredExpenses.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
              📊 Expense Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={filteredExpenses}
                  dataKey="amount"
                  nameKey="category"
                  outerRadius={100}
                  label
                >
                  {filteredExpenses.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )} */}
        <div className="mt-12 flex flex-col items-center">
  <h3 className="text-xl font-semibold text-gray-800 mb-6">Expense Breakdown</h3>

  <div className="flex items-center gap-10">
    {/* Chart */}
    <div className="w-64 h-64">
      <Pie
        data={pieData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false, // move legend outside
            },
          },
        }}
      />
    </div>

    {/* Legend */}
    <div className="flex flex-col space-y-2 text-sm text-gray-700">
      {pieData.labels.map((label, i) => (
        <div key={label} className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: pieData.datasets[0].backgroundColor[i] }}
          />
          <span>{label}</span>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default BudgetPlanner;
