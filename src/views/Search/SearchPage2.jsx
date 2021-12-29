import React, { useRef, useEffect, useState } from "react";
import * as Search from "./SearchPage.styles";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

import SearchResults from "../../components/Results/SearchResults";

// SocketIO
import io from "socket.io-client";
const socket = io.connect("http://localhost:1337");

const SearchPage2 = () => {
  const searchRef = useRef();
  const [results, setResults] = useState([]);
  const [cookie, setCookie] = useCookies(["jwtToken"]);
  const history = useHistory();

  useEffect(() => {
    console.log("RAN");
    if (!cookie.jwtToken) {
      // history.replace('/auth/login');
      history.replace("/auth/login");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1337/api/search/", {
        clientToken: cookie.jwtToken,
        term: searchRef.current.value,
      })
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => {
        if (err.response.status === 403) history.replace("/auth/login");
      });
  };

  return (
    <main>
      <Search.Wrapper>
        <Search.Input onSubmit={handleSubmit}>
          <input type="text" ref={searchRef} placeholder="Search" />
          <Search.Button>
            <FiSearch />
            <span>Search</span>
          </Search.Button>
        </Search.Input>
        {results && <SearchResults results={results} />}
      </Search.Wrapper>
    </main>
  );
};

export default SearchPage2;
