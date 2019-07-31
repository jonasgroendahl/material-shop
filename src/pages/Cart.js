import React, { useContext } from "react";
import { List, Grid, Paper, Divider, ListSubheader, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Context from "../utils/Context";
import CartItems from "../components/CartItems";

export default function Cart() {
  const { cart, dispatch } = useContext(Context);

  const total = cart.reduce((acc, cur) => acc + parseInt(cur.price) * cur.qty, 0);

  return (
    <div>
      <Grid container spacing={4} style={{ padding: 40 }}>
        <Grid item xs={8}>
          <Paper>
            <List subheader={<ListSubheader>Cart items</ListSubheader>}>
              <Divider />
              <CartItems dispatch={dispatch} cart={cart} />
            </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Grid container style={{ padding: 16 }}>
              <Typography variant="h6">Total</Typography>
              <div style={{ flexGrow: 1 }} />
              <Typography variant="h6">${total}</Typography>
            </Grid>
            <Divider />
            <div style={{ padding: 16 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={cart.length === 0}
                component={Link}
                to="/checkout"
              >
                Go to checkout
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
