"use client";

import React, { useState } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const AIChat = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    setIsLoading(true);
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: "user", content: userInput },
    ]);
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [...chatHistory, { role: "assistant", content: userInput }],
        model: "gpt-3.5-turbo",
      });

      setChatHistory((prevChat) => [
        ...prevChat,
        {
          role: "assistant",
          content: chatCompletion.choices[0].message.content,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-md mg-white p-4 rounded-lg shadow-md bg-accent">
        <div className="text-4x1 font-bold text-lightgrey mb-2">
          Chatbot Assistant
        </div>
        <p className="text-white text-lg">
          Welcome to Revitalize Massage and Wellness. Ask me anything, I'm happy
          to help!
        </p>
      </div>
      <div className="mb-4">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`${
              message.role === "user" ? "text-right" : "text-left"
            } mb-2 `}>
            <div
              className={`rounded-full p-2 max-w-md mx-4 inline-block ${
                message.role === "user"
                  ? "bg-secondary text-white"
                  : "bg-main text-white"
              }`}>
              {message.role === "user" ? "H" : "A"}
            </div>
            <div
              className={`max-w-md mx-4 my-2 inline-block ${
                message.role === "user"
                  ? "bg-secondary text-white"
                  : "bg-main text-white"
              }`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="What is face lift massage?"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 p-2 rounded-l-lg"
        />
        {isLoading ? (
          <div className="bg-blue-500 text-white p-2 rounded-r-lg animate-pulse">
            Loading...
          </div>
        ) : (
          <button
            onClick={handleUserInput}
            className="bg-secondary text-black p-2 rounded-r-lg hover:bg-main hover:text-white">
            Ask
          </button>
        )}
      </div>
    </div>
  );
};

export { AIChat };
