import React, { useState, useEffect, useCallback } from "react";
import {
  InputAdornment,
  TextField,
  Paper,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@material-ui/core";
import { Search, Tab, KeyboardBackspace } from "@material-ui/icons";
import "./SearchField.scss";
import { withRouter } from "react-router-dom";

function SearchField({ products, history, onRedirect, isMobile }) {
  const [search, setSearch] = useState("");
  const [expandedOnMobile, setExpandedOnMobile] = useState(false);

  const memoRedirectToSearchPage = useCallback(() => {
    onRedirect();
    setSearch("");
    history.replace(`/search?query=${search}`);
  }, [search, history, onRedirect]);

  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === "Enter") {
        memoRedirectToSearchPage();
      }
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [memoRedirectToSearchPage]);

  function handleChange(e) {
    setSearch(e.target.value.toLowerCase());
  }

  function navigateToProductPage(id) {
    onRedirect();
    setSearch("");
    history.push(`/product/${id}`);
  }

  const autoComplete = products.reduce((acc, cur) => {
    if (cur.name.toLowerCase().includes(search) && search !== "") {
      acc.push(cur);
    }
    return acc;
  }, []);

  function toggleExpandedOnMobile() {
    if (setExpandedOnMobile) {
      setSearch("");
    }
    setExpandedOnMobile(!expandedOnMobile);
  }

  function renderSearchField() {
    if (isMobile && !expandedOnMobile) {
      return (
        <IconButton onClick={toggleExpandedOnMobile}>
          <Search />
        </IconButton>
      );
    } else if (isMobile && expandedOnMobile) {
      return (
        <Paper className="expanded" square>
          <TextField
            value={search}
            onChange={handleChange}
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
          />
          <IconButton onClick={toggleExpandedOnMobile}>
            <KeyboardBackspace />
          </IconButton>
        </Paper>
      );
    } else {
      return (
        <TextField
          value={search}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
        />
      );
    }
  }

  return (
    <div className="SearchField">
      {renderSearchField()}
      {search !== "" ? (
        <Paper className={isMobile ? "autocomplete mobile" : "autocomplete"}>
          <List disablePadding>
            {autoComplete.slice(0, 6).map((link, index) => (
              <ListItem
                divider
                button
                key={`a_${index}`}
                onClick={() => navigateToProductPage(link.id)}
              >
                <ListItemIcon>
                  <Tab />
                </ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
            <ListItem divider button onClick={memoRedirectToSearchPage}>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText primary={search} />
            </ListItem>
          </List>
        </Paper>
      ) : null}
    </div>
  );
}

export default withRouter(SearchField);
