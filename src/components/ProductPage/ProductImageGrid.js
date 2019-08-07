import React, { useState, useEffect } from "react";
import { Grid, Dialog } from "@material-ui/core";
import "./ProductImageGrid.scss";
import SelectedImage from "./SelectedImage";

export default function ProductImageGrid({ images = [] }) {
  const [selected, setSelected] = useState(0);
  const [fullImage, setFullImage] = useState("");

  // In case user redirects from one product to another
  useEffect(() => {
    setSelected(0);
  }, [images]);

  function handleArrowClick(direction) {
    let newSelected = selected;

    direction === "right" ? newSelected++ : newSelected--;

    if (newSelected < 0) {
      newSelected = images.length - 1;
    } else if (newSelected > images.length - 1) {
      newSelected = 0;
    }

    setSelected(newSelected);
  }

  return (
    <div className="ProductImageGrid">
      <div className="selected-image-container">
        <Grid container spacing={2}>
          <Grid
            item
            sm={2}
            container
            direction="column"
            alignContent="center"
            className="image-list"
          >
            {images.map((image, index) => (
              <Grid
                item
                key={`i_${index}`}
                className={index === selected ? "image-list-item selected" : "image-list-item"}
              >
                <img src={image} height={60} alt="" onClick={() => setSelected(index)} />
              </Grid>
            ))}
          </Grid>
          <Grid item sm={10} container wrap="nowrap">
            <SelectedImage
              selected={images[selected]}
              onClick={setFullImage}
              onChange={handleArrowClick}
            />
          </Grid>
        </Grid>
      </div>
      <Dialog open={Boolean(fullImage)} onClose={() => setFullImage("")} maxWidth="lg">
        <Grid container>
          <img src={fullImage} style={{ width: "100%" }} />
        </Grid>
      </Dialog>
    </div>
  );
}
