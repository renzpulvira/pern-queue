import React, { useState, useEffect } from "react";
import { Wrapper } from "../../Global.styles";

import QueueList from "../../components/Queues/QueueList";
import Player from "../../components/Player/Player";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { useCookies } from "react-cookie";

const HomePage = () => {
  const [cookie, setCookie] = useCookies(["jwtToken"]);
  const [queues, setQueues] = useState([]);
  const history = useHistory();

  const fetchQueues = async () => {
    console.log("REQUESTING...");
    const res = await axios.get("http://localhost:1337/api/queues/");
    if (res) console.log("REQUESTED...");
    console.log(res);
    setQueues(res.data);
  };

  useEffect(() => {
    if (!cookie.jwtToken) {
      history.replace("/auth/login");
      return;
    }

    fetchQueues();
  }, []);

  return (
    <Wrapper>
      <QueueList queues={queues} />
      <Player />
    </Wrapper>
  );
};

export default HomePage;
