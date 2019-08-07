import React, { useContext, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProductInfo from "../components/ProductPage/ProductInfo";
import ProductImageGrid from "../components/ProductPage/ProductImageGrid";
import Context from "../utils/Context";
import AdditionalInfo from "../components/ProductPage/AdditionalInfo";
import Spacer from "../components/Spacer";

export default function Product({ match }) {
  const { products } = useContext(Context);
  const [product, setProduct] = useState(undefined);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const product = products.find(p => p.id == match.params.id);
    setProduct(product);
    console.log(product);
  }, [match, products]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ProductImageGrid
            {...product}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProductInfo {...product} />
        </Grid>
      </Grid>
      <Spacer mt={50} />
      <AdditionalInfo />
    </div>
  );
}
