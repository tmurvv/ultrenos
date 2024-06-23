import { Box } from "@mui/material";

const sx = {
  mainContainer: {
    backgroundColor: "#000000",
    maxHeight: "400px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "0 20px",
    position: "relative",
    width: "100vw",
  },
  logo: {
    height: "70%",
  },
};

export const Banner = () => {
  return (
    <Box sx={sx.mainContainer}>
      <Box
        component="img"
        sx={sx.logo}
        alt={"Banner logo"}
        src={"/img/ultimate_renovations-white_logo.png"}
      />
    </Box>
  );
};
