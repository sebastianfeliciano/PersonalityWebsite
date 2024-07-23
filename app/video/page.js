'use client'
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Chat = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const profileName = searchParams.get('profile') || 'Alice Smith';

  const [messages, setMessages] = useState([
    { sender: "Alice", text: "Hi, how can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (profileName !== "Alice Smith") {
      // Simulate other profiles if needed
    }
  }, [profileName]);

  const goBack = () => {
    router.back();
  };

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "You", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages([...newMessages, { sender: "Alice", text: data.reply }]);
      } else {
        console.error("Error in response:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching the chat response:", error);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="border-b p-4 flex justify-between items-center">
        <button className="btn btn-neutral" onClick={goBack}>Back</button>
        <p className="text-xl">Chat with {profileName}</p>
      </div>
      <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`bg-white p-4 rounded shadow mb-4 ${msg.sender === "You" ? "ml-auto" : "mr-auto"}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="p-4 bg-white flex items-center">
        <input
          type="text"
          className="input input-bordered flex-grow"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="btn btn-primary ml-2" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
