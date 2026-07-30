import React from "react";
import Mess from "./Mess.jsx";
import useGetMessages from "../../context/useGetMessages.js";
import Loading from "../../components/Loading.jsx";
import { useAuth } from "../../context/AuthProvider.jsx"; // 👈 import useAuth
import { useEffect, useRef } from "react";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx"; // 👈

function Message() {
  const { messages, loading } = useGetMessages();
  useGetSocketMessage();

  const [authUser] = useAuth(); // 👈 array destructuring
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  return (
    <>
      <div
        className="flex-1 overflow-y-auto"
        style={{ minHeight: "calc(92vh - 8vh)" }}
      >
        {loading ? (
          <Loading />
        ) : (
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Mess message={message} authUser={authUser} />
            </div>
          ))
        )}

        <div className="" style={{ minHeight: "calc(88vh - 10vh)" }}>
          {!loading && messages.length === 0 && (
            <div>
              <p className="text-center font-sans mt-[20%]">Say! hii</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Message;
