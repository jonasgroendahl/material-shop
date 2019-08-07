import React from "react";
import Navbar from "./components/Navbar";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Product from "./pages/Product";
import { ContextProvider } from "./utils/Context";
import Search from "./pages/Search";
import { CssBaseline } from "@material-ui/core";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { StripeProvider, Elements } from "react-stripe-elements";
import { AuthContextProvider } from "./utils/AuthContext";
import User from "./pages/User";

export default function App() {
  return (
    <StylesProvider injectFirst>
      <StripeProvider apiKey="pk_test_XiuIdfw5qsyn0qAQnoiR9IIx00Fp3Riu1c">
        <AuthContextProvider>
          <ContextProvider>
            <CssBaseline />
            <BrowserRouter>
              <div>
                <Navbar />
                <main>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/help" component={Help} />
                    <Route path="/product/:id" component={Product} />
                    <Route path="/search" component={Search} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/user" component={User} />
                    <Route
                      path="/checkout"
                      component={props => (
                        <Elements>
                          <Checkout {...props} />
                        </Elements>
                      )}
                    />
                  </Switch>
                </main>
              </div>
            </BrowserRouter>
          </ContextProvider>
        </AuthContextProvider>
      </StripeProvider>
    </StylesProvider>
  );
}
