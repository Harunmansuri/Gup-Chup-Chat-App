import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../statemanage/useConversation.js";
import sound from "../assets/noti.mp3";
  
function useGetSocketMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notification = new Audio(sound);
        notification.play(); 
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage"); // Clean up the event listener on component unmount
    };
  }, [socket, messages, setMessages]);
}

export default useGetSocketMessage;
