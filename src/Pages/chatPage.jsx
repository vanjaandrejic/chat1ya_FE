import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/chat");
      console.log(response.data);
      setChats(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {chats.map((chat) => (
        <h2 key={chat._id}>{chat.chatName}</h2>
      ))}
    </div>
  );
};

export default ChatPage;
