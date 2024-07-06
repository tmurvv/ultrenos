import { Box, Typography } from "@mui/material";
import * as React from "react";

import {Assignment} from "../interfaces";

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
const COLOR_BLACKISH = "#030303";
const COLOR_ALICE_BLUE = "#b3cfe8";
const COLOR_DARK_GOLD = "#f9ae33";

const sx = {
  all: {
    border: `1px solid ${LIGHT_GREY}`,
    minHeight: "20px",
    // width: "100px",
    backgroundColor: WHITE,
    color: COLOR_BLACKISH,
    flex: 1,
    p: .5
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
    backgroundColor: COLOR_ALICE_BLUE,
    flex: 2
    // width: "200px",
  },
  colHeader: {
    border: `1px solid ${BLACK}`,
    backgroundColor: COLOR_DARK_GOLD,
  },
  default: {},
};


export const Square: React.FC<SquareProps> = ({
  assignment,
    color,
  text,
  type,
}) => {
  console.log("ass", assignment)
  const projectName = assignment?.projectName;
  return (
    <Box sx={{ ...sx.all, ...sx[type ?? "default"], backgroundColor: color }}>
      <Typography>{text || projectName || ""}</Typography>
    </Box>
  );
};
