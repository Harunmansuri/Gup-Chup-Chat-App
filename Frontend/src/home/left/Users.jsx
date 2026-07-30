import React from "react";
import User from "./User";
import userGetAllUsers from "../../context/userGetAllUsers";

function Users() {
  const [allUsersObj, loading] = userGetAllUsers();

  //const users = allUsersObj?.filteredUsers || [];
  const users = allUsersObj && allUsersObj.filteredUsers ? allUsersObj.filteredUsers : [];


  console.log("Fetched Users:", users);

  return (
    <div
      style={{ maxHeight: "calc(84vh - 1vh)" }}
      className="py-2 flex-ankit overflow-y-auto"
    >
      {loading ? (
        <div className="text-white px-8">Loading users...</div>
      ) : users.length > 0 ? (
        users.map((user, index) => (
          <User key={index} user={user} />
        ))
      ) : (
        <div className="text-white px-8">No users found.</div>
      )}
    </div>
  );
}

export default Users;
