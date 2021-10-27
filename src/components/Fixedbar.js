import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import shampoo2 from "../Assets/shampoo2.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 438,
  height: 419,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
};
const useStyles = makeStyles({
  container: {
    border: "1px #D2D2D2 solid",
    width: "575px",
    height: "113px",
    borderRadius: "4px",
    marginTop: "15px",
    marginBottom: "40px",
  },
  close: {
    backgroundColor: "red",
    color: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    margin: "25px",
  },
  check: {
    backgroundColor: "#32B97C",
    color: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    margin: "25px",
  },
  modaltext: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: "18px",
  },
  imgbox: {
    width: "98px",
    height: "98px",
    borderRadius: "4px",
    backgroundColor: "#F8F3E9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalalign: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  shower: {
    fontSize: "16px",
    fontWeight: "700",
    width: "163px",
  },
  shower2: {
    fontSize: "12px",
    fontWeight: "500",
    color: "grey",
  },
  shower3: {
    fontSize: "20px",
    fontWeight: "700",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",
  },
  transparent: {
    border: "1px #044236 solid",
    backgroundColor: "transparent",
    width: "189px",
    color: " #044236",
    margin: "5px",
    textTransform: "inherit",
    height: "48px",
  },
  coloured: {
    border: "1px #044236 solid",
    backgroundColor: "#044236",
    width: "189px",
    color: "white",
    textTransform: "inherit",
    margin: "5px",
    height: "48px",
  },
  scrolltext: {
    color: " #004236FC",
    fontSize: "16px",
    fontWeight: "600",
  },

  rupee: {
    fontWeight: "700",
    fontSize: "18px",
  },
  addbtn: {
    backgroundColor: "#044236",
    width: "139px",
    textTransform: "inherit",
    color: "white",
  },
  btnalign: {
    display: "flex",
    marginTop: "25px",
  },

  fixbar: {
    bottom: "0",
    alignItems: "center",
  },
  fixed: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  moreicon: {
    margin: "15px",
  },
});

export default function Fixedbar() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        className={classes.fixbar}
        style={{
          width: "100%",
          position: "fixed",
          zIndex: "7000",
          marginTop: "20px",
        }}
      >
        <Box
          style={{
            backgroundColor: "#F8F3E9",
            zIndex: "2000",
            height: "100px",
          }}
          className={classes.bgcolor}
        >
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style} className={classes.modal}>
                <CloseIcon
                  className={classes.close}
                  style={{ fontSize: "55px" }}
                />
                <CheckIcon
                  className={classes.check}
                  style={{ fontSize: "55px" }}
                />
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  className={classes.modaltext}
                >
                  Product added to your cart
                </Typography>
                <Box className={classes.modalalign}>
                  <Box className={classes.imgbox}>
                    <img src={shampoo2} alt="" className={classes.image4} />
                  </Box>
                  <Box>
                    <Typography className={classes.shower}>
                      Fuji Green Tea Shower Gel
                    </Typography>
                    <Typography className={classes.shower2}>
                      Quantity 1 • 750 ml
                    </Typography>
                  </Box>
                  <Typography className={classes.shower3}>₹ 899</Typography>
                </Box>
                <Box className={classes.buttons}>
                  <Button className={classes.transparent}>
                    Continue Shopping
                  </Button>
                  <Button className={classes.coloured}>View Basket</Button>
                </Box>
              </Box>
            </Fade>
          </Modal>
          <Box className={classes.fixed}>
            <Box className={classes.accordion}>
              <Typography className={classes.scrolltext}>
                Satsuma Shower Gel
              </Typography>
              <Typography className={classes.rupee}>₹ 499</Typography>
            </Box>
            <Box className={classes.btnalign}>
              <Button
                className={classes.addbtn}
                type="submit"
                variant="outlined"
                onClick={handleOpen}
              >
                Add to Bag
              </Button>
              <ExpandMoreIcon className={classes.moreicon} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
