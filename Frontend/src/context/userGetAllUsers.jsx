import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function userGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState([]); // 

  useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/getUserProfile", {
          withCredentials: true, // 
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      } 
    };

    getAllUsers();
  }, []);

  return [allUsers, loading];
}

export default userGetAllUsers;
