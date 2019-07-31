import React, { useContext, useState } from "react";
import CartItems from "../components/CartItems";
import Context from "../utils/Context";
import {
  Paper,
  List,
  Grid,
  TextField,
  Divider,
  Button,
  Typography,
  InputAdornment
} from "@material-ui/core";
import {
  CreditCard,
  AccountCircle,
  LocationCity,
  Public,
  LocationOn,
  Place,
  LocalPostOffice
} from "@material-ui/icons";
import "./Checkout.scss";

export default function Checkout() {
  const { dispatch, cart } = useContext(Context);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    country: "",
    postal: "",
    city: ""
  });

  function handleChange(e) {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  }

  const total = cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

  return (
    <div className="Checkout">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Paper style={{ marginBottom: 20 }}>
            <List>
              <CartItems cart={cart} dispatch={dispatch} editable={false} />
            </List>
          </Paper>
          <Paper style={{ padding: 25, marginBottom: 20 }}>
            <Grid container direction="column">
              <Grid spacing={1} container alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item style={{ flexGrow: 1 }}>
                  <TextField label="Name" onChange={handleChange} name="name" fullWidth />
                </Grid>
              </Grid>
              <TextField
                label="Address"
                onChange={handleChange}
                name="address"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Place />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="Country"
                onChange={handleChange}
                name="country"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Public />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="City"
                onChange={handleChange}
                name="city"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCity />
                    </InputAdornment>
                  )
                }}
                margin="normal"
              />
              <TextField
                label="Postal"
                onChange={handleChange}
                name="postal"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPostOffice />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Paper>
          <Paper>
            <div className="credit-card-div" style={{ padding: 15 }}>
              <CreditCard />
              <TextField
                label="Card number"
                className="credit-card-number"
                placeholder="2424 2424 2424 2424"
              />
              <TextField label="MM" inputProps={{ maxLength: 2 }} />
              <TextField label="YY" inputProps={{ maxLength: 2 }} />
              <TextField label="CVC" inputProps={{ maxLength: 3 }} />
            </div>
            <Divider />
            <div style={{ padding: 15, textAlign: "right" }}>
              <div>
                <Typography variant="caption">{`Total:   $${total}`}</Typography>
              </div>
              <Button variant="contained" color="primary">
                Confirm order
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
