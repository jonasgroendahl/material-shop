import React from "react";
import { ListItem, List, ListSubheader, Grid } from "@material-ui/core";

export default React.memo(function NavItems({ items, isMobile = false, onClick }) {
  function getSubCategories() {
    console.log("Getting sub categories...", isMobile);

    return items.reduce((acc, cur) => {
      if (!acc[cur.subcategory]) {
        acc[cur.subcategory] = [];
      }

      acc[cur.subcategory].push(cur);
      return acc;
    }, {});
  }

  const subCategories = getSubCategories();

  return (
    <Grid container wrap={isMobile ? "nowrap" : "wrap"} direction={isMobile ? "column" : "row"}>
      {Object.keys(subCategories).map(sub => (
        <List subheader={<ListSubheader>{sub}</ListSubheader>} key={sub}>
          {subCategories[sub].map(product => (
            <ListItem button key={product.name} onClick={() => onClick(`/product/${product.id}`)}>
              {product.name}
            </ListItem>
          ))}
        </List>
      ))}
    </Grid>
  );
});
