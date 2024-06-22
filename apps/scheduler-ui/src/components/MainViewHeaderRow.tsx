import { Box } from "@mui/material";
import { Square } from "./Square.js";

const HeaderSquare = ({text, type}) => (
  <Box
    sx={{
      border: "2px solid black",
      minHeight: "20px",
      width: "100px",
      backgroundColor: "white",
      color: "#030303",
    }}
  >
    <Square text={text} type={type}/>
  </Box>
);

export const MainViewHeaderRow = () => {
  return (
    <Box display={"flex"}>
      <Square text={""} type={"colRowHeader"}/>
      <Square text={"Monday"} type={"colHeader"} />
      <Square text={"Tuesday"} type={"colHeader"} />
      <Square text={"Wednesday"} type={"colHeader"} />
      <Square text={"Thursday"} type={"colHeader"} />
      <Square text={"Friday"} type={"colHeader"} />
      <Square text={"Saturday"} type={"colHeader"} dayType={"weekend"} />
      <Square text={"Sunday"} type={"colHeader"} dayType={"weekend"} />
    </Box>
  );
};
