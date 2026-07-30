import { useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  const sendMessages = async (message) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      setMessage([...messages, response.data]); // ✅ add new message to the list
      //console.log("✅ Message sent successfully:", response.data);
      setLoading(false);
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setLoading(false);
    }
  };

  return { loading, sendMessages };
};

export default useSendMessage;
