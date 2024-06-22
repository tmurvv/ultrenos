import { Box, Typography } from "@mui/material";

const sx = {
  all: {
    border: "1px solid lightGrey",
    minHeight: "20px",
    width: "100px",
    backgroundColor: "white",
    color: "#030303",
  },
  weekend: {
    border: "1px solid darkGrey",
    backgroundColor: "lightGrey",
  },
  colRowHeader: {
    border: "1px solid darkGrey",
    backgroundColor: "lightGrey",
    color: "black",
    width: "200px",
  },
  rowHeader: {
    border: "1px solid black",
    backgroundColor: "#b3cfe8",
    width: "200px"
  },
  colHeader: {
    border: "1px solid black",
    backgroundColor: "#f9ae33",
  },
};

export const Square = ({ assignment, text, type }) => {
  console.log("text", text);
  assignment = {projectName: "test 1"};
  return (
    <Box sx={{ ...sx.all, ...sx[type] }}>
      <Typography>{text || assignment.projectName}</Typography>
    </Box>
  );
};
