import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const sx = {
  mainTitle: {
    textAlign: "center",
    margin: "auto",
    letterSpacing: "1.5px",
    fontSize: "24p",
  },
  subTitle: {
    width: "60%",
    margin: "auto",
    textAlign: "center",
    fontStyle: "italic",
    color: "#868686",
    letterSpacing: "1px",
    fontWeight: "500",
    fontSize: "14px",
    paddingTop: "10px",
  },
};

export const PageTitle = ({ maintitle, subtitle }) => {
  const [winWidth, setWinWidth] = useState(2000);
  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, []);
  return (
    <>
      <Box sx={sx.mainTitle}>
        <Typography variant={"h3"}>{maintitle}</Typography>
      </Box>
      <Box sx={sx.subTitle}>
        <Typography variant={"h5"}>{subtitle}</Typography>
      </Box>
    </>
  );
};
