import React from "react";

function Mess({ message, authUser }) {
  const isSender = message.senderId === authUser.user._id;
  const createdAt = new Date(message.createdAt);
  const formattedDate = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="p-4">
      <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
        <div
          className={`chat-bubble ${
            isSender ? "chat-bubble-accent" : "chat-bubble-info"
          }`}
        >
          {message.message}
        </div>
        <div>
          {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default Mess;
