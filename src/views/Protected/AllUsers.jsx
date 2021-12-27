import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies, Cookies } from "react-cookie";

import axios from "axios";

const AllUsers = () => {
  const [users, setAllUsers] = useState(null);
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(["jwtToken"]);

  console.log(cookies);

  const requestUsers = async () => {
    const clientToken = cookies.jwtToken;
    console.log(Cookies);
    try {
      const res = await axios.post("http://localhost:1337/api/user/", {
        clientToken,
      });
      setAllUsers(res.data.allUsers);
    } catch (err) {
      if (err) console.log(err);
      history.replace("/auth/login");
    }
  };

  useEffect(() => {
    requestUsers();
    console.log("initializesd!");
    console.log(cookies);
  }, []);

  return (
    <div>
      <h3>All Users</h3>
      <button onClick={requestUsers}>Request Users</button>
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
