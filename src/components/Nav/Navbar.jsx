import React, { useState } from "react";
import {
  Grid,
  Card,
  Tabs,
  Tab,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Navbar() {
  let history = useHistory();

  const [value, setValue] = useState("one");
  const [userName, setUserName] = useState("Renz");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2em", marginBottom: "1em" }}>
      <Card style={{ width: "100%" }}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab
                value="one"
                label="Music Player"
                component="a"
                onClick={(event) => {
                  event.preventDefault();
                  history.push("/");
                }}
              />
              <Tab
                value="two"
                label="Search"
                component="a"
                onClick={(event) => {
                  event.preventDefault();
                  history.push("/search");
                }}
              />
              <Tab
                value="three"
                label="Settings"
                component="a"
                onClick={(event) => {
                  event.preventDefault();
                  history.push("/settings/profile");
                }}
              />
            </Tabs>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "flex-end", paddingRight: "15px" }}
            >
              <Typography
                variant="caption"
                style={{ display: "flex", alignItems: "center" }}
              >
                Hello, {userName}
              </Typography>
              <Avatar
                alt="Renz Pulvira"
                src="/static/images/avatar/3.jpg"
                sx={{ width: 28, height: 28 }}
              >
                R
              </Avatar>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
