import { useState } from 'react';
import { Send } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  text: string;
  isBot: boolean;
};

const BOT_RESPONSES: Record<string, string> = {
  "investment": "Based on your profile, I recommend diversifying your portfolio with a mix of mutual funds and stocks. Consider starting with index funds.",
  "savings": "To improve your savings, try the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and investments.",
  "budget": "I notice your spending on entertainment is high. Consider setting a monthly budget limit and tracking expenses using our budget tool.",
  "default": "I'm your financial assistant. Ask me about investments, savings, or budgeting tips!"
};

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you with your finances today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(input.toLowerCase());
      setMessages([...newMessages, { text: response, isBot: true }]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    for (const [key, response] of Object.entries(BOT_RESPONSES)) {
      if (input.includes(key)) return response;
    }
    return BOT_RESPONSES.default;
  };

  return (
    <Card className="flex flex-col h-[600px]">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Financial Assistant</h2>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t flex gap-2">
        <Input
          placeholder="Ask about investments, savings, or budgeting..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}