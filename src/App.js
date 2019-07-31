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

export default function App() {
  return (
    <StylesProvider injectFirst>
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
                <Route path="/checkout" component={Checkout} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </StylesProvider>
  );
}
