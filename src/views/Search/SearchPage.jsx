import React, { useState } from "react";
import {
  TextField,
  Divider,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";

const dummyCols = [
  { title: "Learn Typescript in 5 minutes 1", channel: "CodeCloud" },
  { title: "Learn Typescript in 5 minutes 2", channel: "CodeCloud" },
  { title: "Learn Typescript in 5 minutes 3", channel: "CodeCloud" },
  { title: "Learn Typescript in 5 minutes 4", channel: "CodeCloud" },
  { title: "Learn Typescript in 5 minutes 5", channel: "CodeCloud" },
];

const SearchResults = ({ title, channel, thumbnail }) => {
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
          <Button size="small" variant="outlined">
            Queue Up
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default function SearchPage() {
  const [searchVal, setSearchVal] = useState("");
  const [videoResults, setVideoResults] = useState([]);
  // const [queues, setQueues] = useState(dummyCols);

  const onChangeSearch = (e) => {
    setSearchVal(e.target.value);

    // Search video from api
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // setActiveSearch(!activeSearch);

    // TODO: Add input validation
    try {
      const results = await axios.post(`http://localhost:4000/api/search/`, {
        term: searchVal,
      });
      setVideoResults(results.data.results);
    } catch (err) {
      if (err) console.log(err);
    }
  };

  return (
    <React.Fragment>
      <main>
        <h3>Search</h3>
        <form onSubmit={handleSearchSubmit} style={{ marginBottom: "1em" }}>
          <ButtonGroup style={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Search Video"
              variant="outlined"
              value={searchVal}
              onChange={onChangeSearch}
            />
            <Button variant="contained" type="submit">
              Search
            </Button>
          </ButtonGroup>
        </form>

        {/* Results */}
        <Grid container spacing={3}>
          {videoResults.length > 0 ? (
            videoResults.map((col, ind) => (
              <SearchResults
                key={ind}
                title={col.title}
                channel={col.channelTitle}
                thumbnail={col.thumbnails.default.url}
              />
            ))
          ) : (
            <p>Search a video</p>
          )}
        </Grid>
      </main>
    </React.Fragment>
  );
}
