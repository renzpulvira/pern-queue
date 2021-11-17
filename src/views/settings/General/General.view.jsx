import React, { useState } from "react";
import {
  Divider,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

export default function GeneralPage() {
  const [checked, setChecked] = useState(false);

  const onChangeSwitch = (e) => {
    setChecked(!checked);
  };

  return (
    <React.Fragment>
      <main>
        <h1>General</h1>
        <Divider textAlign="left">
          <Typography variant="h6">UI</Typography>
        </Divider>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={onChangeSwitch} />}
            label="Dark Theme"
          />
        </FormGroup>
      </main>
    </React.Fragment>
  );
}
