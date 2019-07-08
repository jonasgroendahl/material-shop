import React from "react";
import "./NavDrawer.scss";
import { Typography, Divider, Drawer, Grid } from "@material-ui/core";
import NavItems from "./NavItems";
import { randomImage } from "../utils/data";

export default function NavDrawer(props) {
  const { category, items } = props;

  return (
    <Drawer className="NavDrawer" anchor="top" open={Boolean(category)}>
      <div className="container">
        <Typography variant="h5">{category}</Typography>
        <Divider />
        <Grid container>
          <Grid item sm={10}>
            <NavItems items={items} />
          </Grid>
          <Grid item sm={2}>
            <img src={randomImage} height={100} alt="Category" />
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
}
