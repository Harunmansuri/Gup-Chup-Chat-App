import React from "react";
import Chatuser from "./Chatuser";
import Message from "./Message";
import Text from "./Text";
import useConversation from "../../statemanage/useConversation";
import { useAuth } from "../../context/AuthProvider";
import { CiMenuFries } from "react-icons/ci";

export default function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className="w-full bg-slate-800 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChat />
        ) : (
          <>
            {" "}
            <Chatuser />
            <div
              className="py-2 flex-ankit overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 10vh) " }}
            >
              <Message />
            </div>
            <Text />
          </>
        )}
      </div>
    </div>
  );
}
const NoChat = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.name}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};
