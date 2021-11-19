import React, { useState } from "react";
import {
  Divider,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { connect } from "react-redux";
import { toggleTheme } from "../../../store/actions/theme.action.js";

function GeneralPage({ dispatch, themeVal }) {
  const [checked, setChecked] = useState(false);

  const onChangeSwitch = (e) => {
    setChecked(!checked);
    dispatch(toggleTheme());
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

const mapStateToProps = (state) => ({
  themeVal: state.theme,
});

export default connect(mapStateToProps)(GeneralPage);
