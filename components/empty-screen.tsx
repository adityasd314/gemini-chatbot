import { UseChatHelpers } from 'ai/react';

import { Button } from '@/components/ui/button';
import { ExternalLink } from '@/components/external-link';
import { IconArrowRight } from '@/components/ui/icons';

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Your Financial AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This intelligent financial assistant helps you track your spending habits, provides personalized financial insights, and assists you in making informed investment and budgeting decisions.
        </p>
        <p className="leading-normal text-muted-foreground">
          Our chatbot offers real-time financial advice based on your transactions and helps set achievable financial goals for a secure future.
        </p>
      </div>
    </div>
  );
}
