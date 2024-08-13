import { NextRequest } from 'next/server';
import { aiUseChatAdapter } from '@upstash/rag-chat/nextjs';
import { ragChat } from '@/lib/rag-chat';

export async function POST(req: Request) {
 const { messages, sessionId } = await req.json();
  
  const lastMessage = messages[messages.length - 1].content;

  const res = await ragChat.chat(lastMessage,{streaming:true, sessionId});

  console.log("response",res);

  return aiUseChatAdapter(res);

}
