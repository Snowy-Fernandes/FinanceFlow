import { CreditCard, Banknote } from 'lucide-react';
import { Card } from "@/components/ui/card";

const transactions = [
  { icon: CreditCard, name: 'Amazon Shopping', amount: '-₹2,499', date: 'Today' },
  { icon: Banknote, name: 'Salary Credit', amount: '+₹85,000', date: 'Yesterday' },
  { icon: CreditCard, name: 'Electricity Bill', amount: '-₹1,850', date: '2 days ago' },
];

export function RecentTransactions() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <transaction.icon className="h-5 w-5 text-gray-600" />
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <p className={transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}