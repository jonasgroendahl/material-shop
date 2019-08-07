import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Grid
} from "@material-ui/core";
import { Menu, Close, ChevronLeft } from "@material-ui/icons";
import "./MobileNavigation.scss";
import NavItems from "./NavItems";
import { products } from "../utils/data";

export default function MobileNavigation({ menuItems, onClick }) {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleClick(path) {
    setOpen(!open);
    setSelectedCategory("");

    // if onClickHandler, call onClick which will navigate the user to a new page
    if (onClick) {
      onClick(path);
    }
  }

  return (
    <div>
      <IconButton onClick={handleClick}>{open ? <Close /> : <Menu />}</IconButton>
      <Drawer open={open} className="MobileNavigation" hideBackdrop style={{ top: 56 }}>
        <List>
          {!selectedCategory ? (
            menuItems.map((point, index) => (
              <ListItem button onClick={() => setSelectedCategory(point)} key={`cat_${index}`}>
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
              <NavItems
                items={products.filter(product => product.product === selectedCategory)}
                isMobile={true}
                onClick={handleClick}
              />
            </>
          )}
        </List>
      </Drawer>
    </div>
  );
}
