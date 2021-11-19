import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
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

function SearchPage({ themeVal }) {
  const [searchVal, setSearchVal] = useState("");
  const [videoResults, setVideoResults] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(themeVal);
  }, [themeVal]);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  themeVal: state.theme,
});

export default connect(mapStateToProps)(SearchPage);
