import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import shampoo from "../Assets/product.png";
import shampoo2 from "../Assets/gg3.png";
import shampoo3 from "../Assets/gg1.png";
import shampoo4 from "../Assets/gg2.png";
import shampoo5 from "../Assets/gg3.png";
import shampoo6 from "../Assets/gg1.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    margin: "0 auto",
    height: "579px",
  },
  mainhead: {
    display: "flex",
  },
  recommend: {
    color: "#044236",
    fontWeight: "700",
    fontSize: "24px",
    padding: "10px",
    marginLeft: "145px",
  },
  section: {
    display: "flex",
    justifyContent: "space-around",
  },
  box2: {
    width: "170px",
    height: "200px",
    backgroundColor: "#F8F3E9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  anti: {
    width: "164px",
    fontWeight: "700",
    fontSize: "15px",
  },
  rate: {
    display: "flex",
    width: "200px",
    justifyContent: "flex-start",
  },
  rateline: {
    display: "flex",
  },
  jesse2: {
    fontSize: "14px",
    fontWeight: "500",
    color: "gray",
    marginTop: "5px",
  },
  greenhead: {
    color: "gray",
    fontSize: "12px",
    fontWeight: "600",
    marginTop: "5px",
  },
  rupee: {
    fontWeight: "700",
    fontSize: "15px",
    marginTop: "5px",
  },
  ggbtn: {
    backgroundColor: "#044236",
    width: "144px",
    height: "40px",
    textTransform: "inherit",
    color: "white",
    position: "relative",
    "&:hover": { backgroundColor: "#044236" },
    marginTop: "5px",
  },
  arrow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "150px",
  },
});

export default function Recommended() {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.mainhead}>
        <Typography className={classes.recommend} variant="h2">
          Recommended
        </Typography>
      </Box>
      <Box className={classes.section}>
        <ChevronLeftIcon
          className={classes.arrow}
          style={{
            fontSize: "40px",
            backgroundColor: "#044236",
            borderRadius: "50%",
            color: "white",
          }}
        />
        <Box>
          <Box className={classes.box2}>
            <img src={shampoo} alt="" />
          </Box>
          <Typography className={classes.anti}>
            Anti-Dandruff Shampoo
          </Typography>
          <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={4.5}
                  precision={0.5}
                  style={{ color: "#3D857E" }}
                />
              </Stack>
              <Typography className={classes.jesse2}>(487)</Typography>
            </Box>
          </Box>

          <Typography className={classes.greenhead}>
            To refresh & clean skin
          </Typography>
          <Typography className={classes.greenhead}>750 ml</Typography>
          <Typography className={classes.rupee}>₹899</Typography>
          <Button className={classes.ggbtn}>Add to Bag</Button>
        </Box>
        <Box>
          <Box className={classes.box2}>
            <img src={shampoo2} alt="" />
          </Box>
          <Typography className={classes.anti}>
            Fuji Green Tea Shower Gel
          </Typography>
          <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={4.5}
                  precision={0.5}
                  style={{ color: "#3D857E" }}
                />
              </Stack>
              <Typography className={classes.jesse2}>(487)</Typography>
            </Box>
          </Box>

          <Typography className={classes.greenhead}>
            To refresh & clean skin
          </Typography>
          <Typography className={classes.greenhead}>750 ml</Typography>
          <Typography className={classes.rupee}>₹899</Typography>
          <Button className={classes.ggbtn}>Add to Bag</Button>
        </Box>
        <Box>
          <Box className={classes.box2}>
            <img src={shampoo3} alt="" />
          </Box>
          <Typography className={classes.anti}>Coconut Shower Cream</Typography>
          <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={4.5}
                  precision={0.5}
                  style={{ color: "#3D857E" }}
                />
              </Stack>
              <Typography className={classes.jesse2}>(487)</Typography>
            </Box>
          </Box>

          <Typography className={classes.greenhead}>
            To refresh & clean skin
          </Typography>
          <Typography className={classes.greenhead}>750 ml</Typography>
          <Typography className={classes.rupee}>₹899</Typography>
          <Button className={classes.ggbtn}>Add to Bag</Button>
        </Box>
        <Box>
          <Box className={classes.box2}>
            <img src={shampoo4} alt="" />
          </Box>
          <Typography className={classes.anti}>
            Pink Grape Fruit Shower Gel
          </Typography>
          <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={4.5}
                  precision={0.5}
                  style={{ color: "#3D857E" }}
                />
              </Stack>
              <Typography className={classes.jesse2}>(487)</Typography>
            </Box>
          </Box>

          <Typography className={classes.greenhead}>
            To refresh & clean skin
          </Typography>
          <Typography className={classes.greenhead}>750 ml</Typography>
          <Typography className={classes.rupee}>₹899</Typography>
          <Button className={classes.ggbtn}>Add to Bag</Button>
        </Box>
        <Box>
          <Box className={classes.box2}>
            <img src={shampoo5} alt="" />
          </Box>
          <Typography className={classes.anti}>
            Fuji Green Tea Shower Gel
          </Typography>
          <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={4.5}
                  precision={0.5}
                  style={{ color: "#3D857E" }}
                />
              </Stack>
              <Typography className={classes.jesse2}>(487)</Typography>
            </Box>
          </Box>

          <Typography className={classes.greenhead}>
            To refresh & clean skin
          </Typography>
          <Typography className={classes.greenhead}>750 ml</Typography>
          <Typography className={classes.rupee}>₹899</Typography>
          <Button className={classes.ggbtn}>Add to Bag</Button>
        </Box>
        <Box>
          <Box className={classes.box2}>
            <img src={shampoo6} alt="" />
          </Box>
          <Typography className={classes.anti}>Coconut Shower Cream</Typography>
          <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={4.5}
                  precision={0.5}
                  style={{ color: "#3D857E" }}
                />
              </Stack>
              <Typography className={classes.jesse2}>(487)</Typography>
            </Box>
          </Box>

          <Typography className={classes.greenhead}>
            To refresh & clean skin
          </Typography>
          <Typography className={classes.greenhead}>750 ml</Typography>
          <Typography className={classes.rupee}>₹899</Typography>
          <Button className={classes.ggbtn}>Add to Bag</Button>
        </Box>
        <ChevronRightIcon
          className={classes.arrow}
          style={{
            fontSize: "40px",
            backgroundColor: "#044236",
            borderRadius: "50%",
            color: "white",
          }}
        />
      </Box>
    </Box>
  );
}
