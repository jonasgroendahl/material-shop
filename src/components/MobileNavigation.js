import React, { useState } from "react";
import { IconButton, Drawer, List, ListItem, ListItemText, ListSubheader, Typography, Divider, Grid } from "@material-ui/core";
import { Menu, Close, ChevronLeft } from "@material-ui/icons";
import "./MobileNavigation.scss";
import NavItems from "./NavItems";
import { products } from "../utils/data";

export default function MobileNavigation({ menuItems }) {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleClick() {
    setOpen(!open);
    setSelectedCategory("");
  }

  return (
    <div>
      <IconButton onClick={handleClick}>{open ? <Close /> : <Menu />}</IconButton>
      <Drawer open={open} className="MobileNavigation">
        <List>
          {!selectedCategory ? (
            menuItems.map(point => (
              <ListItem button onClick={() => setSelectedCategory(point)}>
                <ListItemText primary={point} />
              </ListItem>
            ))
          ) : (
            <>
              <Grid container alignItems="center">
                <IconButton onClick={() => setSelectedCategory("")}>
                  <ChevronLeft />
                </IconButton>
                <Typography variant="h5">{selectedCategory}</Typography>
              </Grid>
              <Divider />
              <NavItems items={products.filter(product => product.product === selectedCategory)} isMobile={true} />
            </>
          )}
        </List>
      </Drawer>
    </div>
  );
}
