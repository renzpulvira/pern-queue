import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";

import Queues from "./components/Queues/Queues";

function App() {
  return (
    <>
      <main className="App">
        <Divider textAlign="left">
          <Typography variant="b">Queues</Typography>
        </Divider>
        <Queues />
      </main>
    </>
  );
}

export default App;
