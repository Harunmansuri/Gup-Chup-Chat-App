import React from "react";
import { LuLogOut } from "react-icons/lu";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";


function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout =  async () => {
    setLoading(false);
    try {
     const response =  await axios.post("/api/user/logout");
     localStorage.removeItem("messengerUser");
     Cookies.remove("jwt");
     setLoading(false);
     toast.success("Logout successfully ! ");
      
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("failed to Logout"); 
    }
  };
  return (
    <>
      <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end ">
    
        <div className="p-3 align-bottom">
          <form action="">
            <div className="flex space-x-3">
              <button>
              <LuLogOut className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" onClick={handleLogout}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Logout;
