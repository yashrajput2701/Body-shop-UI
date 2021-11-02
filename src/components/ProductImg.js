import React from "react";
import { makeStyles, Box, Button, Typography } from "@material-ui/core";
import background from "../Assets/shampoo.png";
import shampoo2 from "../Assets/shampoo2.png";
import heart from "../Assets/Vector (2).png";
const useStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "center",
    flexbasis: "50%",
    maxWidth: "50%",
    position: "fixed",
    top: "270px",
  },
  wrapper: {
    position: "fixed",
    top: "230px",
    left: "134px",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    padding:"15px",
    background: "#F8F3E9",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heart: {
    height: "30px",
    width: "30px",
    margin: "10px",
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
    "&:hover": { backgroundColor: "#044236" },
  },
  align: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    height: "50px",
    width: "480px",
    left: "130px",
    top: "755px",
  },
  containert: {
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
  straight: {
    display: "flex"
  }
});

export default function ProductImg() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Box className={classes.straight}>
          <Typography className={classes.text}>
            Home / Order history / Night care /
          </Typography>
          <Typography>Satsuma Shower Gel</Typography>
        </Box>
        <Box className={classes.main}>
          <Box className={classes.fixedimg}>
            <Box className={classes.container}>
              <img className={classes.shampooimg} src={background} alt="" />
            </Box>

            <Box className={classes.align}>
              <img className={classes.heart} src={heart} alt="" />
              <Button variant="contained" className={classes.primarybtn}>
                Notify me
              </Button>
            </Box>
          </Box>
          <Box>
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
          </Box>
        </Box>
      </div>
    </>
  );
}
