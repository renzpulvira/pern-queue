import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const Playground = () => {
  const [cookie, setCookie] = useCookies(["jwtToken"]);
  const [myUsername, setMyUsername] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (!cookie.jwtToken) {
      // history.replace('/auth/login');
      history.replace("/auth/login");
    }
  }, []);

  const requestUsername = async () => {
    console.log(cookie.jwtToken);
    const user = axios
      .post("http://localhost:4000/auth/requestuser", {
        clientToken: cookie.jwtToken,
      })
      .then((response) => {
        setMyUsername(response.data.name);
      })
      .catch((error) => {
        if (error.response.status === 403) {
          history.replace("/auth/login");
        }
      });
  };

  return (
    <div>
      <h3>Playground</h3>
      <p>Request Playground Code Here</p>
      <pre>
        <code>{myUsername && myUsername}</code>
      </pre>
      <button onClick={requestUsername}>Request Username</button>
    </div>
  );
};

export default Playground;
