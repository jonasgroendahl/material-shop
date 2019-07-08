import React from "react";
import Navbar from "./components/Navbar";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Product from "./pages/Product";

export default function App() {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/help" component={Help} />
            <Route path="/product:id" component={Product} />
          </Switch>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
}
