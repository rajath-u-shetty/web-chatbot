import React from 'react'
import { Message } from "./Message";
import { type Message as TMessage } from "ai/react";
import { MessagesSquare } from 'lucide-react';

export const Messages = ({ messages }: { messages: TMessage[] }) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, index) => (
          <Message
            key={index}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className='flex-1 flex flex-col items-center justify-center gap-2'>
          <MessagesSquare className='size-8 text-blue-500' />
          <h3 className='font-semibold text-xl'>You're all set!</h3>
          <p className='text-zinc-500 text-sm'>Ask your first question to get started</p>
        </div>
      )}
    </div>
  );
};

