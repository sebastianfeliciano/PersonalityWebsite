'use client'
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const Chat = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const profileName = searchParams.get('profile') || 'User 1';

  const [messages, setMessages] = useState([
    { sender: "User 1", text: "Hi, how can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [imageViewed, setImageViewed] = useState(false);

  const profileImage = "https://randomuser.me/api/portraits/men/1.jpg";

  useEffect(() => {
    if (profileName !== "User 1") {
      // Simulate other profiles if needed
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 9000);

    return () => clearTimeout(timer);
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewImage = () => {
    setOpen(false);
    setImageOpen(true);
  };

  const handleCloseImage = () => {
    setImageOpen(false);
    setImageViewed(true);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="border-b p-4 flex justify-between items-center">
        <button className="btn btn-neutral" onClick={goBack}>Back</button>
        <p className="text-xl">Chat with {profileName}</p>
      </div>
      <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`bg-white p-4 rounded shadow mb-4 ${msg.sender === "You" ? "ml-auto" : "mr-auto flex items-center"}`}>
            {msg.sender === "User 1" && imageViewed && (
              <img src={profileImage} alt={`${profileName}'s image`} className="w-8 h-8 rounded-full mr-2" />
            )}
            <div>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
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

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>View User's Image</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Would you like to see {profileName}'s image?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleViewImage} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={imageOpen} onClose={handleCloseImage}>
        <DialogTitle>{profileName}'s Image</DialogTitle>
        <DialogContent>
          <img src={profileImage} alt={`${profileName}'s image`} className="w-full h-auto" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseImage} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Chat;
