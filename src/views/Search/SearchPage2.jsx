import React, { useRef, useState } from "react";
import * as Search from "./SearchPage.styles";
import { FiSearch } from "react-icons/fi";

import SearchResults from "../../components/Results/SearchResults";

const externalData = [
  {
    id: 0,
    title: "SPIDER-MAN: No Way Home - Villains Panel",
    descrip: "Lorem ipsum dolor sit amet.",
    video_id: "fasd89051",
    channel_id: "nea740912",
  },
  {
    id: 1,
    title: "Who is the Best Spider-Man?",
    descrip: "Lorem ipsum dolor sit amet.",
    video_id: "fasd89051",
    channel_id: "nea740912",
  },
  {
    id: 2,
    title: "NEW TRAILER Spider-Man: No Way Home",
    descrip: "Lorem ipsum dolor sit amet.",
    video_id: "fasd89051",
    channel_id: "nea740912",
  },
  {
    id: 3,
    title: 'Spider-Man Trailer "Catch"',
    descrip: "Lorem ipsum dolor sit amet.",
    video_id: "fasd89051",
    channel_id: "nea740912",
  },
  {
    id: 4,
    title: "Spider-Man: No Way Home THINGS you missed.",
    descrip: "Lorem ipsum dolor sit amet.",
    video_id: "fasd89051",
    channel_id: "nea740912",
  },
];

const SearchPage2 = () => {
  const searchRef = useRef();
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchRef.current.value);
    setResults(externalData);
    searchRef.current.value = "";
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
        <SearchResults results={results} />
      </Search.Wrapper>
    </main>
  );
};

export default SearchPage2;
