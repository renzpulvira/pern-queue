import React, { useState, useEffect } from "react";
import { Results, Item, InfoButton } from "./SearchResults.styles";
import axios from "axios";
import { connect } from "react-redux";
import { updateQueues } from "../../store/actions/queue.action";

const ResultItem = ({
  id,
  title,
  description,
  video_id,
  channelId,
  thumbnails,
  queue,
  dispatch,
}) => {
  const insertVideoToQueue = async () => {
    let res = await axios.post("http://localhost:1337/api/queues/create", {
      video_id: id,
      channel_id: channelId,
      title,
      queued_by: "me",
      queue_order: 5,
      room_id: 2,
    });
    dispatch(updateQueues(res.data));
    console.log({ queued: true, res });
  };

  return (
    <Item>
      <div
        className="thumb"
        style={{ backgroundImage: `url(${thumbnails.medium.url})` }}
      ></div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description.substring(0, 90) + "..."}</p>
        <div className="info__button-group">
          <InfoButton onClick={insertVideoToQueue}>Add to Queue</InfoButton>
          <InfoButton
            target="_blank"
            href={`https://youtube.com/watch?v=${video_id}`}
          >
            Video
          </InfoButton>
          <InfoButton
          // target="_blank"
          // href={`https://youtube.com/watch?v=${channelId}`}
          >
            Channel
          </InfoButton>
        </div>
      </div>
    </Item>
  );
};

const SearchResults = ({ dispatch, results, queue }) => {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    setResultData(results);
    console.log(resultData);
    console.log("initialized");
  }, [results]);

  if (!(resultData.length > 0)) {
    return null;
  }

  return (
    <Results>
      {resultData.map((info, index) => (
        <ResultItem key={index} {...info} dispatch={dispatch} queue={queue} />
      ))}
    </Results>
  );
};

const mapStateToProps = (state) => ({
  queue: state.queue,
});
export default connect(mapStateToProps)(SearchResults);
