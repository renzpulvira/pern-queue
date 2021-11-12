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

const dummyCols = [
  { title: "Learn Typescript in 5 minutes 1", channel: "CodeCloud" },
  { title: "Learn Typescript in 5 minutes 2", channel: "CodeCloud" },
  { title: "Learn Typescript in 5 minutes 3", channel: "CodeCloud" },
  { title: "Learn Typescript in 5 minutes 4", channel: "CodeCloud" },
  { title: "Learn Typescript in 5 minutes 5", channel: "CodeCloud" },
];

const SearchResults = ({ title, channel }) => {
  return (
    <Grid item xs={12} lg={4}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{channel}</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default function SearchPage() {
  const [searchVal, setSearchVal] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  const onChangeSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveSearch(!activeSearch);
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
        {activeSearch && (
          <Grid container spacing={3}>
            {dummyCols.map((col, ind) => (
              <SearchResults
                key={ind}
                title={col.title}
                channel={col.channel}
              />
            ))}
          </Grid>
        )}
      </main>
    </React.Fragment>
  );
}
