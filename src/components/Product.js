import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import ProductImg from "./ProductImg";
import Fixedbar from "./Fixedbar";
// import Footer from "./Footer";
const useStyles = makeStyles({
  container: {
    position: "fixed",
    height: "16px",
    left: "32px",
    top: "209px",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    display: "flex",
    justifyContent: "center",
  },

  text: {
    color: "gray",
  },
});

export default function Product() {
  const classes = useStyles();

  return (
    <>
    <Box>
      <Box className={classes.container}>
        <Typography className={classes.text}>
          Home / Order history / Night care /
        </Typography>
        <Typography>Satsuma Shower Gel</Typography>
      </Box>
      <ProductImg />
      <Fixedbar />
    </Box>

    </>
  );
}
