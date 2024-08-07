import { Box, Typography } from "@mui/material";
import * as React from "react";

import {Entry} from "../interfaces/Entry";

interface SquareProps {
  assignment?: { projectName: string };
  entry: Entry;
  type?: "all" | "weekend" | "colRowHeader" | "rowHeader" | "colHeader";
  dayType?: string;
}

const LIGHT_GREY = "lightGrey";
const BLACK = "black";
const WHITE = "white";
const COLOR_BLACKISH = "#030303";
const COLOR_ALICE_BLUE = "#b3cfe8";
const COLOR_DARK_GOLD = "#f9ae33";

const sx = {
  all: {
    border: `1px solid ${LIGHT_GREY}`,
    minHeight: "20px",
    backgroundColor: WHITE,
    color: COLOR_BLACKISH,
    flex: 1,
    p: 0.5,
  },
  weekend: {
    border: `1px solid ${LIGHT_GREY}`,
    backgroundColor: LIGHT_GREY,
  },
  colRowHeader: {
    border: `1.5px solid ${LIGHT_GREY}`,
    backgroundColor: LIGHT_GREY,
    color: BLACK,
    flex: 1.25,
  },
  rowHeader: {
    border: `1.5px solid ${LIGHT_GREY}`,
    backgroundColor: COLOR_ALICE_BLUE,
    flex: 1.25,
  },
  colHeader: {
    border: `1.5px solid ${LIGHT_GREY}`,
    backgroundColor: COLOR_DARK_GOLD,
  },
  default: {},
};

export const Square: React.FC<SquareProps> = ({ entry, type }) => {
  return (
    <Box
      sx={{
        ...sx.all,
        ...sx[type ?? "default"],
        backgroundColor: entry?.backgroundColor ?? "#fff",
        color: entry?.color ?? "#000",
      }}
    >
      <Typography>{entry?.text ?? ""}</Typography>
    </Box>
  );
};
