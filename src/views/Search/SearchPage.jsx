import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import { TextField, ButtonGroup, Button, Grid } from "@mui/material";
import axios from "axios";
import SearchResults from "../../components/Results/Results.jsx";

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

  const onChangeSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
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
                  videoId={col.id}
                  channelId={col.channelId}
                  channel={col.channelTitle}
                  thumbnail={col.thumbnails.default.url}
                />
              ))
            ) : (
              <Grid item xs={12} lg={12}>
                <p>Search a video</p>
              </Grid>
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
