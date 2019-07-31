import React from "react";
import { Typography } from "@material-ui/core";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <div className="jumbotron">
        <div className="tagline">
          <Typography variant="h2">Homescreen</Typography>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/374894/pexels-photo-374894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
      </div>
    </div>
  );
}
