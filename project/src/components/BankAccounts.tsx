import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, CreditCard, PiggyBank, Plus } from "lucide-react";

const accounts = [
  {
    bank: 'HDFC Bank',
    accountType: 'Savings Account',
    accountNumber: '****6789',
    balance: '₹1,45,678',
    branch: 'Andheri West, Mumbai',
    ifsc: 'HDFC0001234',
  },
  {
    bank: 'ICICI Bank',
    accountType: 'Salary Account',
    accountNumber: '****4321',
    balance: '₹85,000',
    branch: 'Bandra East, Mumbai',
    ifsc: 'ICIC0005678',
  },
];

const cards = [
  {
    bank: 'HDFC Bank',
    type: 'Credit Card',
    number: '****5678',
    limit: '₹2,00,000',
    dueDate: '15th Apr 2024',
    rewards: '2000 points',
  },
];

export function BankAccounts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Connected Accounts</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Account
        </Button>
      </div>

      <Tabs defaultValue="accounts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="accounts">Bank Accounts</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
        </TabsList>

        <TabsContent value="accounts" className="space-y-4">
          {accounts.map((account, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{account.bank}</h3>
                    <p className="text-sm text-muted-foreground">{account.accountType}</p>
                  </div>
                </div>
                <p className="text-xl font-semibold">{account.balance}</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Account Number</p>
                  <p className="font-medium">{account.accountNumber}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">IFSC Code</p>
                  <p className="font-medium">{account.ifsc}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Branch</p>
                  <p className="font-medium">{account.branch}</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="cards" className="space-y-4">
          {cards.map((card, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{card.bank}</h3>
                    <p className="text-sm text-muted-foreground">{card.type}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Card Number</p>
                  <p className="font-medium">{card.number}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Credit Limit</p>
                  <p className="font-medium">{card.limit}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Due Date</p>
                  <p className="font-medium">{card.dueDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Rewards</p>
                  <p className="font-medium">{card.rewards}</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}