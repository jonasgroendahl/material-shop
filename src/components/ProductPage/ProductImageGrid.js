import React, { useState } from "react";
import { Grid, IconButton, Fab } from "@material-ui/core";
import Spacer from "../Spacer";
import { ChevronRight, ChevronLeft } from "@material-ui/icons";
import "./ProductImageGrid.scss";

export default function ProductImageGrid({ images = [] }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="ProductImageGrid">
      <div className="selected-image-container">
        <img src={images[selected]} alt="" />
        <div className="arrow-div">
          <Fab size="small">
            <ChevronLeft />
          </Fab>
          <Fab size="small">
            <ChevronRight />
          </Fab>
        </div>
      </div>
    </div>
  );
}
