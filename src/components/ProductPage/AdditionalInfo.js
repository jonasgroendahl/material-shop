import React, { useState } from "react";
import { Paper, Tabs, Tab, AppBar, Typography } from "@material-ui/core";
import Spacer from "../Spacer";

export default function AdditionalInfo() {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <Paper>
        <AppBar position="static" color="inherit" elevation={1}>
          <Tabs color="primary" value={tab} indicatorColor="primary">
            <Tab label="General" />
            <Tab label="Stock" />
          </Tabs>
        </AppBar>
        <Spacer />
        <Typography variant="body1" style={{ padding: 40 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, ea ipsa
          distinctio quis consectetur voluptates possimus mollitia facere totam sunt quos
          blanditiis. Deleniti sint voluptas repellat harum incidunt voluptates excepturi illo
          laborum distinctio quasi dolorum, recusandae modi maxime quod consequuntur facere
          voluptate numquam. Ullam quas commodi sequi. Harum, iusto!
        </Typography>
      </Paper>
    </div>
  );
}
