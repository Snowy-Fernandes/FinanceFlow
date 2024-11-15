import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, DollarSign, TrendingUp, Wallet } from "lucide-react";

const incomeData = [
  { source: 'Salary', amount: '₹85,000', date: '1st Apr 2024', type: 'Regular' },
  { source: 'Freelance', amount: '₹25,000', date: '3rd Apr 2024', type: 'Variable' },
  { source: 'Investments', amount: '₹12,000', date: '5th Apr 2024', type: 'Passive' },
  { source: 'Rental', amount: '₹30,000', date: '7th Apr 2024', type: 'Passive' },
];

const stats = [
  { title: 'Total Income', amount: '₹1,52,000', icon: DollarSign, change: '+12.5%' },
  { title: 'Regular Income', amount: '₹85,000', icon: Wallet, change: '+5.2%' },
  { title: 'Passive Income', amount: '₹42,000', icon: TrendingUp, change: '+8.7%' },
];

export function IncomeTracker() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.amount}</h3>
                <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Income Sources</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="regular">Regular</TabsTrigger>
              <TabsTrigger value="passive">Passive</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-4">
            {incomeData.map((income, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div>
                  <p className="font-medium">{income.source}</p>
                  <p className="text-sm text-muted-foreground">{income.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{income.amount}</p>
                  <p className="text-sm text-muted-foreground">{income.type}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}