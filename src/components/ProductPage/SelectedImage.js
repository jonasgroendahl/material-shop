import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

export default function SelectedImage({ onClick, selected, onChange }) {
  return (
    <>
      <Grid item container alignItems="center" style={{ flex: 0 }}>
        <IconButton onClick={() => onChange("left")}>
          <ChevronLeft />
        </IconButton>
      </Grid>
      <Grid item style={{ flex: 1 }}>
        <img src={selected} alt="" className="selected-image" onClick={() => onClick(selected)} />
      </Grid>
      <Grid container alignItems="center" style={{ flex: 0 }}>
        <IconButton onClick={() => onChange("right")}>
          <ChevronRight />
        </IconButton>
      </Grid>
    </>
  );
}
