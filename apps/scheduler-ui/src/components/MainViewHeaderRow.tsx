import { Box } from "@mui/material";
import { Square } from "./Square.js";

export const MainViewHeaderRow = () => {
  return (
    <Box display={"flex"} width={"100%"}>
      <Square text={"Resource / NYI: dynamic by view"} type={"colRowHeader"}/>
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
