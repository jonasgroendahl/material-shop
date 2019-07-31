import React from "react";
import {
  Typography,
  ListItem,
  ListItemText,
  Grid,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Select,
  InputLabel
} from "@material-ui/core";

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
            <Avatar src={cartItem.images[0]} style={{ width: 100, height: 100 }} />
          </ListItemAvatar>
          <ListItemText primary={cartItem.name} />
          <ListItemSecondaryAction>
            <Grid container direction="column">
              <Typography gutterBottom>${cartItem.price}</Typography>
              <div>
                <InputLabel>Quantity</InputLabel>
                {editable ? (
                  <Select
                    native
                    value={cartItem.qty}
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
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </>
  );
}
