import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";

const portfolioValue = {
  total: '₹5,20,000',
  returns: '+12.5%',
  allocation: [
    { type: 'Mutual Funds', value: 250000, percentage: 48, color: 'bg-blue-600' },
    { type: 'Stocks', value: 150000, percentage: 29, color: 'bg-green-600' },
    { type: 'Fixed Deposits', value: 120000, percentage: 23, color: 'bg-purple-600' },
  ],
};

const recommendations = [
  {
    name: 'HDFC Small Cap Fund',
    type: 'Mutual Fund',
    returns: '18.5%',
    risk: 'Moderate',
  },
  {
    name: 'Nifty 50 Index Fund',
    type: 'Index Fund',
    returns: '15.2%',
    risk: 'Low',
  },
  {
    name: 'Government Securities',
    type: 'Bonds',
    returns: '7.5%',
    risk: 'Very Low',
  },
];

export function Investments() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Portfolio Value</h3>
              <p className="text-3xl font-bold mt-2">{portfolioValue.total}</p>
              <p className="text-sm text-green-600">{portfolioValue.returns} Overall returns</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="space-y-4">
            {portfolioValue.allocation.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <p>{item.type}</p>
                  <p className="font-medium">₹{(item.value).toLocaleString()}</p>
                </div>
                <Progress value={item.percentage} className={item.color} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Investment Recommendations</h3>
          <div className="space-y-4">
            {recommendations.map((item, i) => (
              <div key={i} className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                  </div>
                  <Button variant="outline" size="sm">Invest</Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <p className="text-green-600">Returns: {item.returns}</p>
                  <p className="text-muted-foreground">Risk: {item.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}