import React, { useRef } from "react";
import * as Search from "./SearchPage.styles";
import { FiSearch } from "react-icons/fi";

const SearchPage2 = () => {
  const searchRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchRef.current.value);
    searchRef.current.value = "";
  };

  return (
    <main>
      <Search.Wrapper>
        <Search.Input onSubmit={handleSubmit}>
          <input type="text" ref={searchRef} />
          <Search.Button>
            <FiSearch />
            <span>Search</span>
          </Search.Button>
        </Search.Input>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          officiis hic illo veritatis minus, amet deserunt velit ducimus culpa
          tempora?
        </p>
      </Search.Wrapper>
    </main>
  );
};

export default SearchPage2;
