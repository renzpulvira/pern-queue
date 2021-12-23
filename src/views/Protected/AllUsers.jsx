import React, { useState, useEffect } from "react";

import axios from "axios";

const AllUsers = () => {
  const [users, setAllUsers] = useState(null);

  const requestUsers = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/user/", {
        token: localStorage.getItem("token"),
      });
      console.log(res);
    } catch (err) {
      if (err) console.log(err);
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