import { useEffect, useState, createContext , useContext } from "react";
import { useAuth } from "./AuthProvider.jsx";
import io from "socket.io-client";
const socketContext = createContext();


export const useSocketContext = () => {
  return useContext(socketContext);
};


export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [authUser] = useAuth();
  useEffect(() => {
    if (authUser) {
      const socket = io(import.meta.env.VITE_API_URL, {
        query: {
          userId: authUser.user.id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
        console.log("socket disconnected");
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <socketContext.Provider value={{socket,onlineUsers}}>{children}</socketContext.Provider>
  );
};
