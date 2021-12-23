import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const AllUsers = () => {
  const [users, setAllUsers] = useState(null);
  const history = useHistory();

  const requestUsers = async () => {
    const clientToken = localStorage.getItem("token");
    try {
      const res = await axios.post("http://localhost:4000/api/user/", {
        clientToken,
      });
      setAllUsers(res.data.allUsers);
    } catch (err) {
      if (err) console.log(err);
      history.push("/auth/login");
    }
  };

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <div>
      <h3>All Users</h3>
      {users && (
        <ul>
          {users.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllUsers;
