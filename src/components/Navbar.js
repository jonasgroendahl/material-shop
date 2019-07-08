import React, { useState, useRef } from "react";
import { AppBar, Toolbar, IconButton, Button, useMediaQuery, Avatar, TextField } from "@material-ui/core";
import { categories, products } from "../utils/data";
import { ShoppingCart, Help, Search, Public, ExpandMore, ExpandLess } from "@material-ui/icons";
import "./Navbar.scss";
import NavDrawer from "./NavDrawer";
import MobileNavigation from "./MobileNavigation";
import SearchExpanded from "./SearchExpanded";

export default function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  function handeClick(category) {
    if (category === selectedCategory) {
      return setSelectedCategory("");
    }
    setSelectedCategory(category);
  }

  const isMobile = useMediaQuery("(max-width: 600px");

  return (
    <AppBar className="Navbar" color="default" elevation={!selectedCategory ? 2 : 0} position="sticky">
      <Toolbar>
        {isMobile && <MobileNavigation menuItems={categories} products={products} />}
        <div className="logo-div">
          <Avatar>
            <Public />
          </Avatar>
        </div>
        {!isMobile
          ? categories.map(category => (
              <Button onClick={() => handeClick(category)} key={category}>
                {category}
                <span>{selectedCategory === category ? <ExpandLess /> : <ExpandMore />}</span>
              </Button>
            ))
          : null}
        <div className="ghost" />
        {isSearchExpanded ? null : null}
        <TextField onChange={e => console.log(e)} />
        <IconButton onClick={() => setIsSearchExpanded(!isSearchExpanded)}>
          <Search />
        </IconButton>
        <IconButton>
          <Help />
        </IconButton>
        <IconButton>
          <ShoppingCart />
        </IconButton>
      </Toolbar>
      <NavDrawer category={selectedCategory} items={products.filter(cat => cat.product === selectedCategory)} />
    </AppBar>
  );
}
