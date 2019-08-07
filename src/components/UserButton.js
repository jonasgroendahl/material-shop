import React, { useContext, useState } from "react";
import {
  IconButton,
  Typography,
  Popover,
  TextField,
  Grid,
  Button,
  Avatar
} from "@material-ui/core";
import { Person, Settings, ExitToApp } from "@material-ui/icons";
import AuthContext from "../utils/AuthContext";
import { Link } from "react-router-dom";

export default function UserButton() {
  const { id, name, dispatch, email } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  function handleLogin() {
    setAnchorEl(null);
    dispatch({ type: "LOGIN", payload: { ...login } });
  }

  function handleLogout() {
    setAnchorEl(null);
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div>
      <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
        <Person />
      </IconButton>
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        PaperProps={{ style: { padding: 20 } }}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {id === 0 ? (
          <>
            <Typography variant="subtitle1">You are not logged in.</Typography>
            <Grid container direction="column">
              <TextField
                autoFocus
                label="Email"
                name="email"
                value={login.email}
                type="email"
                onChange={handleChange}
              />
              <TextField
                label="Password"
                name="password"
                value={login.password}
                type="password"
                onChange={handleChange}
                margin="normal"
              />
              <Button variant="contained" color="primary" onClick={handleLogin}>
                Log in
              </Button>
            </Grid>
          </>
        ) : (
          <div>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Avatar style={{ height: 60, width: 60 }}>{name.substr(0, 1)}</Avatar>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{email}</Typography>
                <Grid container>
                  <IconButton onClick={handleLogout}>
                    <ExitToApp />
                  </IconButton>
                  <IconButton component={Link} to="/user">
                    <Settings />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </div>
        )}
      </Popover>
    </div>
  );
}
