import { Box, Typography } from "@mui/material";
import * as React from "react";

interface SquareProps {
  assignment?: { projectName: string };
  text?: string;
  type?: "all" | "weekend" | "colRowHeader" | "rowHeader" | "colHeader";
  dayType?: string;
}

const LIGHT_GREY = "lightGrey";
const DARK_GREY = "darkGrey";
const BLACK = "black";
const WHITE = "white";
const COLOR_030303 = "#030303";
const COLOR_B3CFE8 = "#b3cfe8";
const COLOR_F9AE33 = "#f9ae33";

const sx = {
  all: {
    border: `1px solid ${LIGHT_GREY}`,
    minHeight: "20px",
    // width: "100px",
    backgroundColor: WHITE,
    color: COLOR_030303,
    flex: 1
  },
  weekend: {
    border: `1px solid ${DARK_GREY}`,
    backgroundColor: LIGHT_GREY,
  },
  colRowHeader: {
    border: `1px solid ${DARK_GREY}`,
    backgroundColor: LIGHT_GREY,
    color: BLACK,
    flex: 2
    // width: "200px",
  },
  rowHeader: {
    border: `1px solid ${BLACK}`,
    backgroundColor: COLOR_B3CFE8,
    flex: 2
    // width: "200px",
  },
  colHeader: {
    border: `1px solid ${BLACK}`,
    backgroundColor: COLOR_F9AE33,
  },
  default: {},
};

export const Square: React.FC<SquareProps> = ({
  assignment: assignment,
  text,
  type,
}) => {
  const projectName = assignment?.projectName;
  return (
    <Box sx={{ ...sx.all, ...sx[type ?? "default"] }}>
      <Typography>{text || projectName || ""}</Typography>
    </Box>
  );
};
