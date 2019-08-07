import React from "react";
import {
  Typography,
  ListItem,
  ListItemText,
  Grid,
  ListItemAvatar,
  Avatar,
  Select,
  InputLabel,
  IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const options = [...Array(10)].map((_, index) => <option key={index}>{index + 1}</option>);

export default function CartItems({ cart, dispatch, editable = true }) {
  if (cart.length === 0) {
    return (
      <ListItem>
        <ListItemText primary={"No cart items added yet!"} />
      </ListItem>
    );
  }
  return (
    <>
      {cart.map(cartItem => (
        <ListItem alignItems="flex-start" key={cartItem.id}>
          <ListItemAvatar>
            <Avatar src={cartItem.images[0]} style={{ width: 80, height: 80 }} />
          </ListItemAvatar>
          <ListItemText primary={cartItem.name} />
          <div style={{ marginLeft: "auto" }}>
            <Grid container direction="column">
              <Typography gutterBottom>${cartItem.price}</Typography>
              <div>
                <InputLabel>Quantity</InputLabel>
                {editable ? (
                  <Select
                    native
                    value={cartItem.qty}
                    fullWidth
                    onChange={e =>
                      dispatch({
                        type: "SET_QTY",
                        payload: {
                          productId: cartItem.id,
                          value: e.target.value
                        }
                      })
                    }
                  >
                    {options}
                  </Select>
                ) : (
                  <Typography variant="subtitle1">{cartItem.qty}</Typography>
                )}
              </div>
            </Grid>
          </div>
          <div style={{ marginLeft: 5, alignSelf: "center" }}>
            {editable ? (
              <IconButton
                onClick={() =>
                  dispatch({
                    type: "DELETE_ITEM",
                    payload: {
                      productId: cartItem.id
                    }
                  })
                }
              >
                <Delete />
              </IconButton>
            ) : null}
          </div>
        </ListItem>
      ))}
    </>
  );
}
