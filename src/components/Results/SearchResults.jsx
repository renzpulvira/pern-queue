import React, { useState, useEffect } from "react";
import { Results, Item, InfoButton } from "./SearchResults.styles";

const ResultItem = ({ id, title, descrip, video_id, channel_id }) => {
  return (
    <Item>
      <div className="thumb"></div>
      <div className="info">
        <h3>{title}</h3>
        <p>{descrip}</p>
        <div className="info__button-group">
          <InfoButton>Add to Queue</InfoButton>
          <InfoButton
            target="_blank"
            href={`https://youtube.com/watch?v=${video_id}`}
          >
            Visit Video
          </InfoButton>
          <InfoButton
            target="_blank"
            href={`https://youtube.com/watch?v=${channel_id}`}
          >
            Visit Channel
          </InfoButton>
        </div>
      </div>
    </Item>
  );
};

const SearchResults = ({ results }) => {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    setResultData(results);
    console.log("initialized");
  }, [results]);

  if (!(resultData.length > 0)) {
    return null;
  }

  return (
    <Results>
      {resultData.map((info, index) => (
        <ResultItem key={index} {...info} />
      ))}
    </Results>
  );
};

export default SearchResults;
