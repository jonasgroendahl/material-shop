import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
  Avatar,
  Badge
} from "@material-ui/core";
import { categories } from "../utils/data";
import { ShoppingCart, Help, Public, ExpandMore, ExpandLess } from "@material-ui/icons";
import "./Navbar.scss";
import NavDrawer from "./NavDrawer";
import MobileNavigation from "./MobileNavigation";
import SearchField from "./SearchField";
import Context from "../utils/Context";
import { Link, withRouter } from "react-router-dom";

function Navbar({ history }) {
  const { products, cart } = useContext(Context);

  const [selectedCategory, setSelectedCategory] = useState("");

  function handeClick(category) {
    if (category === selectedCategory) {
      return setSelectedCategory("");
    }
    setSelectedCategory(category);
  }

  const isMobile = useMediaQuery("(max-width: 600px");

  function closeDrawer(path) {
    setSelectedCategory("");
    if (path) {
      history.push(path);
    }
  }

  return (
    <AppBar
      className="Navbar"
      color="default"
      elevation={!selectedCategory ? 2 : 0}
      position="sticky"
    >
      <Toolbar>
        {isMobile && (
          <MobileNavigation menuItems={categories} products={products} onClick={closeDrawer} />
        )}
        <div className="logo-div">
          <Link to="/">
            <Avatar>
              <Public />
            </Avatar>
          </Link>
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
        <SearchField products={products} onRedirect={closeDrawer} isMobile={isMobile} />
        <IconButton>
          <Help />
        </IconButton>
        <Badge badgeContent={cart.length} invisible={cart.length === 0} color="primary">
          <Link to="/cart">
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </Link>
        </Badge>
      </Toolbar>
      <NavDrawer
        category={selectedCategory}
        items={products.filter(cat => cat.product === selectedCategory)}
        onClick={closeDrawer}
      />
    </AppBar>
  );
}

export default withRouter(Navbar);
