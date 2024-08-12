import React from 'react'
import {type Messages as TMessage} from "ai/react";
import { Message } from "./Message";

export const Messages = ({messages}: {messages: TMessage[]}) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
  {messages ? (
    messages.map((message, index) => (
    <Message key={index} content={message.content} isUserMessage={message.role === "user"} />
  ): (
  <div></div>
  )
    </div>
  )
}

