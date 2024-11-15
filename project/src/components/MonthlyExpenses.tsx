import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const expenses = [
  { category: 'Shopping', amount: '₹12,500', percentage: 45, color: 'bg-blue-600' },
  { category: 'Bills & Utilities', amount: '₹8,750', percentage: 30, color: 'bg-purple-600' },
  { category: 'Entertainment', amount: '₹5,000', percentage: 25, color: 'bg-green-600' },
];

export function MonthlyExpenses() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Monthly Expenses</h3>
      <div className="space-y-4">
        {expenses.map((expense, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-2">
              <p>{expense.category}</p>
              <p className="font-medium">{expense.amount}</p>
            </div>
            <Progress value={expense.percentage} className={expense.color} />
          </div>
        ))}
      </div>
    </Card>
  );
}