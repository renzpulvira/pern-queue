import React, { useRef, useEffect, useState } from "react";
import * as Search from "./SearchPage.styles";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

import SearchResults from "../../components/Results/SearchResults";

// SocketIO
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

const SearchPage2 = () => {
  const searchRef = useRef();
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultsRequest = await axios.post(
      "http://localhost:4000/api/search",
      {
        term: searchRef.current.value,
      }
    );
    setResults(resultsRequest.data.results);
  };

  useEffect(() => {
    console.log("RAN");
  }, []);

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
