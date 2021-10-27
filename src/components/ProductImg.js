import React from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import background from "../Assets/shampoo.png";
import shampoo2 from "../Assets/shampoo2.png";
import heart from "../Assets/Vector (2).png";
import Productdesc from "./Productdesc";
const useStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "center",
  },

  container: {
    position: "fixed",
    width: "476px",
    height: "476px",
    left: "135px",
    top: "265px",
    background: "#F8F3E9",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
fixedimg: {
  position: "fixed",
  top: "265px",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
},
  container2: {
    position: "fixed",
    width: "99px",
    height: "99px",
    left: "631px",
    top: "265px",
    background: "#F8F3E9",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container3: {
    position: "fixed",
    width: "99px",
    height: "99px",
    left: "631px",
    top: "370px",
    background: "#F8F3E9",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container4: {
    position: "fixed",
    width: "99px",
    height: "99px",
    left: "631px",
    top: "475px",
    background: "#F8F3E9",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container5: {
    position: "fixed",
    width: "99px",
    height: "99px",
    left: "631px",
    top: "580px",
    background: "#F8F3E9",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heart: {
    height: "30px",
    width: "30px",
    margin: "10px"
  },
  primarybtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 32px",
    width: "131px",
    height: "48px",
    background: "#044236",
    borderRadius: "4px",
    color: "white",
    textTransform: "inherit",
  },
  align: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    height:"50px",
    width: "480px",
    left: "130px",
    top: "755px",
  }
});

export default function ProductImg() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Box className={classes.fixedimg}>
        <Box className={classes.container}>
          <img className={classes.shampooimg} src={background} alt="" />
        </Box>

        <Box className={classes.align}>
          <img className={classes.heart} src={heart} alt="" />
          <Button className={classes.primarybtn}>Notify me</Button>
        </Box>
      </Box>

      <Box className={classes.container2}>
        <img src={shampoo2} alt="" />
      </Box>
      <Box className={classes.container3}>
        <img src={shampoo2} alt="" />
      </Box>
      <Box className={classes.container4}>
        <img src={shampoo2} alt="" />
      </Box>
      <Box className={classes.container5}>
        <img src={shampoo2} alt="" />
      </Box>
      <Productdesc />
    </Box>
  );
}
