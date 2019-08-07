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
import { ShoppingCart, Public, ExpandMore, ExpandLess } from "@material-ui/icons";
import "./Navbar.scss";
import NavDrawer from "./NavDrawer";
import MobileNavigation from "./MobileNavigation";
import SearchField from "./SearchField";
import Context from "../utils/Context";
import { Link, withRouter } from "react-router-dom";
import UserButton from "./UserButton";

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
            <img
              src="http://pluspng.com/img-png/png-logo-design-fancy-png-logo-design-91-on-professional-logo-design-with-png-logo-design-734.png"
              height={40}
            />
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
        <UserButton />
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
        items={products.filter(cat => cat.category === selectedCategory)}
        onClick={closeDrawer}
      />
    </AppBar>
  );
}

export default withRouter(Navbar);
