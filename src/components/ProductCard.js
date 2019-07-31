import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Chip,
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ProductCard({ images, name, price, id, matches }) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/product/${id}`}>
        <CardMedia component="img" height={250} src={images[0]} />
        <CardContent>
          <Typography variant="h5" noWrap>
            {name}
          </Typography>
          <Grid justify="space-between" container>
            <Typography variant="caption">{price}</Typography>
            {matches && <Chip label={matches} color="primary" />}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
