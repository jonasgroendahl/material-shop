import React, { useContext } from "react";
import { Typography, Grid } from "@material-ui/core";
import Context from "../utils/Context";
import ProductCard from "../components/ProductCard";

export default function Search(props) {
  const ctx = useContext(Context);

  // find searchable attributes
  const attributes = Object.keys(ctx.products[0]);

  const queryParams = new URLSearchParams(props.location.search.substr(1));

  const searchKey = queryParams.get("query");

  const results = ctx.products.reduce((acc, cur) => {
    for (let attr of attributes) {
      if (
        cur[attr] &&
        typeof cur[attr] !== "object" &&
        cur[attr].toLowerCase().includes(searchKey)
      ) {
        cur.matches = attr;
        acc.push(cur);
        break;
      }
    }
    return acc;
  }, []);

  return (
    <div>
      {results.length === 0 ? (
        <div>
          <Typography variant="h4">Sorry, no results!</Typography>
        </div>
      ) : (
        <Grid container spacing={2}>
          {results.map((result, index) => (
            <Grid item sm={3} key={`s_${index}`}>
              <ProductCard {...result} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
