// src/context/useGetMessages.js
import { useState, useEffect } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      setLoading(true);

      try {
        const response = await axios.get(
          `/api/message/get/${selectedConversation._id}`
        );
        setMessages(response.data.messages);
        console.log("✅ Messages fetched successfully:", response.data);
      } catch (error) {
        console.error("❌ Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation, setMessages]);

  return { messages, loading };
}

export default useGetMessages;
