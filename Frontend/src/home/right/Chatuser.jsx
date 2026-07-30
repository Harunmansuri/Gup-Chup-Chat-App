import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import {useSocketContext } from "../../context/SocketContext.jsx";

function Chatuser() {
  const { selectedConversation } = useConversation();
  console.log(selectedConversation);
  const {  onlineUsers } = useSocketContext();
  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  }

  if (!selectedConversation) {
    return null; // or some loading state
  }
  return (
    <>
      <div className="flex space-x-4 pl-5 pt-5 h-[12vh] bg-gray-900 hover:bg-gray-600 duration-300 ">
        <div>
          {/*<div className={`avatar ${isOnline ? "online" : ""}`}>*/}
          <div className={`avatar online`}>
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-serif">{selectedConversation.name}</h1>
          <span className="text-sm text-green-500">{getOnlineUserStatus(selectedConversation._id)}</span>
        </div>
      </div>
    </>
  );
}

export default Chatuser;
