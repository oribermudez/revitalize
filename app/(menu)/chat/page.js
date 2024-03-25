"use client";

import { AppStateProvider } from "../../global-state/AppStateContext";

import { AIChat } from "@/app/components/ai-chat/AIChat";

const Chat = () => {
  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20 ">
        <h2 className="text-main font-bold text-xl">Chat</h2>

        <AIChat />
      </div>
    </AppStateProvider>
  );
};

export default Chat;
