import { BarChart3, TrendingUp, FileText } from 'lucide-react';
import { Card } from "@/components/ui/card";

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Total Balance</h3>
          <BarChart3 className="h-5 w-5" />
        </div>
        <p className="text-3xl font-bold">₹2,45,678</p>
        <p className="text-blue-100 mt-2">+12.5% from last month</p>
      </Card>
      
      <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Monthly Income</h3>
          <TrendingUp className="h-5 w-5" />
        </div>
        <p className="text-3xl font-bold">₹85,000</p>
        <p className="text-green-100 mt-2">Salary + Investments</p>
      </Card>
      
      <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Investments</h3>
          <FileText className="h-5 w-5" />
        </div>
        <p className="text-3xl font-bold">₹1,20,000</p>
        <p className="text-purple-100 mt-2">Mutual Funds + Stocks</p>
      </Card>
    </div>
  );
}