import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import axios from "axios";

const SearchResults = ({ title, channel, thumbnail, channelId, videoId }) => {
  // const addQueue = (info) => {
  //   const results = axios.post("http://localhost:400/api/queues/create");
  // };

  const insertNewQueue = async () => {
    let res = await axios.post("http://localhost:1337/api/queues/create", {
      video_id: videoId,
      channel_id: channelId,
      title,
      queued_by: channel /* Change this to queued_by ID */,
    });
    console.log(res);
  };

  return (
    <Grid item xs={12} lg={4}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          alt="green iguana"
          style={{ minHeight: "150px", maxHeight: "150px" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            style={{ minHeight: "70px" }}
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button size="small">{channel}</Button>
          <Button size="small" variant="outlined" onClick={insertNewQueue}>
            Add Queue
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SearchResults;
