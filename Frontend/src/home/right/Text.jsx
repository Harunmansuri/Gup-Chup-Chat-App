import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage.js";

function Text() {
  const { loading, sendMessages } = useSendMessage(); // ✅ correct name
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message); // ✅ correct function
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-3 h-[10vh] text-center bg-gray-800 px-4">
        <div className="w-[70%]">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={"Type here"}
            className="border border-gray-700 bg-slate-900 text-white w-full outline-none py-3 px-3 mt-1 rounded-xl"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-3xl text-white p-2 hover:bg-gray-600 rounded-full flex items-center justify-center"
        >
          <IoIosSend />
        </button>
      </div>
    </form>
  );
}

export default Text;
