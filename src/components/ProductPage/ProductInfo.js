import React, { useContext } from "react";
import {
  Typography,
  Divider,
  Button,
  IconButton,
  Card,
  CardContent,
  CardActions
} from "@material-ui/core";
import "./ProductInfo.scss";
import { AddShoppingCart, Favorite } from "@material-ui/icons";
import Context from "../../utils/Context";

export default function ProductInfo(props) {
  const { name, subcategory, adj, description, color, price } = props;
  const { dispatch } = useContext(Context);

  return (
    <div className="ProductInfo">
      <Card>
        <CardContent className="content">
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">{subcategory}</Typography>
          <Typography variant="body1">{adj}</Typography>
          <Typography variant="body1">{description}</Typography>
          <Divider />
          <Typography variant="body2">{price}</Typography>
          <Typography variant="body1">{color}</Typography>
        </CardContent>
        <div className="ghost" />
        <CardActions>
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
        </CardActions>
      </Card>
    </div>
  );
}
