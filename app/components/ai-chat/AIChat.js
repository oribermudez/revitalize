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
  const [displayAnswer, setDisplayAnswer] = useState(null);

  //Array of possible questions
  const questionsAnswers = {
    "What is face lift massage?":
      "Face lift massage is a type of massage that uses gentle strokes and techniques to lift and tone the facial muscles. It can help reduce the appearance of fine lines and wrinkles, improve circulation, and promote lymphatic drainage. The massage is typically done with the hands, but some therapists may also use tools such as jade rollers or gua sha stones to enhance the effects. Face lift massage is a non-invasive and natural way to rejuvenate the skin and promote a more youthful appearance.",
    "What is Swedish massage?":
      "Swedish massage is the most common and best-known type of massage in the West. If it's your first time at the spa or you don't get massage often, Swedish massage is the perfect massage for you. Swedish massage is based on the Western concepts of anatomy and physiology, compared to the energy-centric style more common in Asian forms of massage. Using lotion or oil, massage therapists typically begin with broad general strokes and then transition to specific strokes to address problem areas.",
    "What is a hot stone massage?":
      "A hot stone massage is a type of massage therapy. It's used to help you relax and ease tense muscles and damaged soft tissues throughout your body. During a hot stone massage, smooth, flat, heated stones are placed on specific parts of your body. The stones are usually made of basalt, a type of volcanic rock that retains heat. The heat warms and relaxes the muscles, which allows the therapist to apply",
    "What are your hours of operation?":
      "Our hours of operation are Monday to Friday from 9 am to 5 pm. We are closed on weekends and public holidays. If you would like to book an appointment outside of our regular hours, please contact us and we will do our best to accommodate you.",
  };

  const handleClickedQuestion = (question) => {
    // Retrieve the answer corresponding to the clicked question

    setDisplayAnswer(question);
  };

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
      <div>
        <div className="flex flex-wrap justify-center">
          {Object.keys(questionsAnswers).map((question, index) => (
            <button
              key={index}
              onClick={() => handleClickedQuestion(question)}
              className="bg-secondary text-white p-2 m-2 rounded-lg hover:bg-secondary">
              {question}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {displayAnswer && (
            <div className="p-4 bg-gray-200 rounded-lg">
              <p>{questionsAnswers[displayAnswer]}</p>
            </div>
          )}
        </div>
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
                message.role === "user" ? " text-black" : " text-main"
              }`}>
              {message.role === "user" ? "You" : "Revit-AI-lize Bot"}
            </div>
            <div
              className={`max-w-md mx-4 my-2 inline-block ${
                message.role === "user" ? " text-black" : " text-main"
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
