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
import { AccountCircle, LocationCity, Public, Place, LocalPostOffice } from "@material-ui/icons";
import "./Checkout.scss";
import { CardElement, injectStripe } from "react-stripe-elements";
import { API_URL } from "../utils/data";
import { calculateTotal } from "../utils/functions";

const stripeDivStyles = {
  base: {
    color: "#424770",
    letterSpacing: "0.025em",
    fontFamily: "Source Code Pro, monospace",
    "::placeholder": {
      color: "#aab7c4"
    },
    padding: 5
  },
  invalid: {
    color: "#9e2146"
  }
};

function Checkout({ stripe }) {
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

  async function submitPayment() {
    let { token } = await stripe.createToken({ name: "Test" });
    console.log(token);
    if (!token) {
      console.log("Wrong details");
      return;
    }
    const response = await fetch(`${API_URL}/payment`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(token)
    });
    console.log(response);
  }

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
            <div style={{ padding: 15 }}>
              <CardElement hidePostalCode style={stripeDivStyles} />
            </div>
            <Divider />
            <div style={{ padding: 15, textAlign: "right" }}>
              <div>
                <Typography variant="caption">{`Total:   $${calculateTotal(cart)}`}</Typography>
              </div>
              <Button variant="contained" color="primary" onClick={submitPayment}>
                Confirm order
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default injectStripe(Checkout);
