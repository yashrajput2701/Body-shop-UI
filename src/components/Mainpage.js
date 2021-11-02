import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import ProductImg from "./ProductImg";
import Fixedbar from "./Fixedbar";
import Productdesc from "./Productdesc";
import Footer from "./Footer";
import Contactpage from "./Contactpage";
import Recommended from "./Recommended";
const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Product() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.wrapper}>
        <ProductImg />
        <Productdesc />
      </div>
      <Recommended />
      <Contactpage />
      <Footer />
      <Fixedbar />
    </>
  );
}
