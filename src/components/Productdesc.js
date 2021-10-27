import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import background from "../Assets/Vector (2)new.png";
import shampoo2 from "../Assets/Vectornew.png";
import heart from "../Assets/Vector (1)new.png";
import Scroll from "./Scroll";
// import Footer from "./Footer";
// import Contactpage from "./Contactpage";
const useStyles = makeStyles({
  container: {
    position: "absolute",
    left: "880px",
    top: "275px",
    height: "680px",
    width: "805px",
    background: "white",
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
  },
  size: {
    fontSize: "38px",
    fontWeight: "700",
  },
  size2: {
    fontSize: "14px",
    color: "gray",
  },
  star: {
    display: "flex",
    marginTop: "5px",
  },
  star1: {
    margin: "3px",
    fontSize: "15px",
    fontWeight: "700",
  },
  star2: {
    margin: "3px",
    color: "gray",
    fontSize: "16px",
  },
  headdesc: {
    fontSize: "14px",
    fontWeight: "700",
  },
  head: {
    marginTop: "10px",
  },
  para: {
    display: "flex",
    width: "600px",
    fontSize: "14px",
    color: "gray",
  },
  blue: {
    color: " #3D857E",
    fontWeight: "700",
    fontSize: "14px",
  },
  para2: {
    fontSize: "14px",
    color: "gray",
  },
  verticalLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "	#F2F2F2",
    marginTop: "25px",
    marginBottom: "25px",
  },
  black: {
    fontSize: "16px",
    fontWeight: "700",
  },
  sizes: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  sizes2: {
    display: "flex",
    marginLeft: "25px",
    marginRight: "25px",
  },
  sizebtn: {
    border: "1px gray solid",
    width: "87px",
    margin: "5px",
  },
  sizesimg: {
    display: "flex",
  },
  images: {
    alignItems: "center",
    textAlign: "center",
    marginLeft: "60px",
    marginRight: "60px",
    marginBottom: "20px",
  },
  small: {
    fontSize: "14px",
  }
});

export default function Productdesc() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.price}>
          <Typography className={classes.size}>Satsuma Shower Gel</Typography>
          <Typography className={classes.size}>₹ 499</Typography>
        </Box>
        <Box className={classes.price}>
          <Typography className={classes.size2}>
            For all skin type • Vagen
          </Typography>
          <Typography className={classes.size2}>
            Inclusive of all tax
          </Typography>
        </Box>
        <Box className={classes.star}>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
          </Stack>
          <Typography className={classes.star1}>4.5/5</Typography>
          <Typography className={classes.star2}>(487)</Typography>
        </Box>
        <Box className={classes.head}>
          <Typography className={classes.headdesc}>
            Fab for sensitive skin
          </Typography>
        </Box>

        <Typography className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Typography>
        <Box className={classes.para}>
          <Typography className={classes.para2}>
            incididunt ut labore et dolore magna aliqua ipsum dolor sit amet...
          </Typography>

          <Typography className={classes.blue}>Read More</Typography>
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Typography className={classes.black}>Select Size</Typography>
        <Box className={classes.sizes}>
          <Box>
            <Button className={classes.sizebtn}>100 ml</Button>
            <Typography className={classes.sizes2}>₹299</Typography>
          </Box>
          <Box>
            <Button className={classes.sizebtn}>200 ml</Button>
            <Typography className={classes.sizes2}>₹399</Typography>
          </Box>
          <Box>
            <Button className={classes.sizebtn}>400 ml</Button>
            <Typography className={classes.sizes2}>₹499</Typography>
          </Box>
          <Box>
            <Button className={classes.sizebtn}>600 ml</Button>
            <Typography className={classes.sizes2}>₹599</Typography>
          </Box>
          <Box>
            <Button className={classes.sizebtn}>800 ml</Button>
            <Typography className={classes.sizes2}>₹699</Typography>
          </Box>
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Box className={classes.sizesimg}>
          <Box className={classes.images}>
            <img src={shampoo2} alt="" />
            <Typography className={classes.small}>
              100 % Vegan
            </Typography>
          </Box>
          <Box className={classes.images}>
            <img src={heart} alt="" />
            <Typography className={classes.small}>
              Cruelty Free
            </Typography>
          </Box>
          <Box className={classes.images}>
            <img src={background} alt="" />
            <Typography className={classes.small}>
              Easy Return
            </Typography>
          </Box>
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Scroll />
   
      </Box>
      {/* <Contactpage />
        <Footer /> */}
    </>
  );
}
