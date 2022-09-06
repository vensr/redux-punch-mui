import React from "react";
import { Grid } from "@mui/material";

const EmptyHome = () => {
  return (
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '80vh' }}
  >
      <img src="welcome.svg" alt="welcome" />
    </Grid>
  );
};

export default EmptyHome;
