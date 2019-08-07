import React, { useContext } from "react";
import { Typography, Button, IconButton, Grid } from "@material-ui/core";
import "./ProductInfo.scss";
import { AddShoppingCart, Favorite } from "@material-ui/icons";
import Context from "../../utils/Context";

export default function ProductInfo(props) {
  const { name, subcategory, adj, description, color, price, category } = props;
  const { dispatch } = useContext(Context);

  return (
    <Grid className="ProductInfo" container direction="column">
      <Typography variant="caption">{category}</Typography>
      <Typography variant="h4" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatum ipsa temporibus
        numquam nulla deleniti? Illum eum distinctio ipsa rerum aut quod voluptates repudiandae!
        Laudantium aliquid dolore laboriosam doloremque nemo.
      </Typography>
      <Grid container style={{ marginTop: "auto" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: "ADD_ITEM", payload: props })}
        >
          <AddShoppingCart style={{ marginRight: 5 }} /> Add to cart
        </Button>
        <IconButton>
          <Favorite />
        </IconButton>
      </Grid>
    </Grid>
  );
}
