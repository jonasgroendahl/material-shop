import React, { useState, useContext, useEffect } from "react";
import { Tabs, Tab, Grid, Avatar, TextField } from "@material-ui/core";
import AuthContext from "../utils/AuthContext";
import { AccountCircle } from "@material-ui/icons";

export default function User() {
  const [tab, setTab] = useState(0);
  const context = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    orders: []
  });

  useEffect(() => {
    const { dispatch, ...userInfo } = context;
    console.log(userInfo);
    setUser(userInfo);
  }, []);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item>
          <Avatar style={{ width: 100, height: 100 }}>{user.name.substr(0, 1)}</Avatar>
        </Grid>
        <Grid item>
          <Tabs value={tab} onChange={(e, value) => setTab(value)} indicatorColor="primary">
            <Tab label="General" />
            <Tab label="Orders" />
          </Tabs>
          <div style={{ marginTop: 20 }}>
            <Grid spacing={1} container alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item style={{ flexGrow: 1 }}>
                <TextField
                  label="Name"
                  onChange={handleChange}
                  name="name"
                  fullWidth
                  value={user.name}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
