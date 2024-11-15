import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from '@/components/Header';
import { OverviewCards } from '@/components/OverviewCards';
import { RecentTransactions } from '@/components/RecentTransactions';
import { MonthlyExpenses } from '@/components/MonthlyExpenses';
import { ChatBot } from '@/components/ChatBot';
import { UserProfile } from '@/components/UserProfile';
import { LoginForm } from '@/components/LoginForm';
import { IncomeTracker } from '@/components/IncomeTracker';
import { BankAccounts } from '@/components/BankAccounts';
import { Investments } from '@/components/Investments';
import { ITRFiling } from '@/components/ITRFiling';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900/50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <OverviewCards />

        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="banks">Bank Accounts</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="itr">ITR Filing</TabsTrigger>
            <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RecentTransactions />
              <MonthlyExpenses />
            </div>
          </TabsContent>

          <TabsContent value="income">
            <IncomeTracker />
          </TabsContent>

          <TabsContent value="banks">
            <BankAccounts />
          </TabsContent>

          <TabsContent value="investments">
            <Investments />
          </TabsContent>

          <TabsContent value="itr">
            <ITRFiling />
          </TabsContent>

          <TabsContent value="assistant">
            <ChatBot />
          </TabsContent>

          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;