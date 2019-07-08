import React from "react";
import { TextField } from "@material-ui/core";

export default function SearchExpanded({ isMobile }) {
  return (
    <div>
      <TextField placeholder="Search products..." />
    </div>
  );
}
