import { Box } from "@mui/material";
import { Square } from "./Square.js";

export const MainViewHeaderRow = () => {
  return (
    <Box display={"flex"} width={"100%"}>
      <Square entry={{text: "Resource"}} type={"colRowHeader"}/>
      <Square entry={{text: "Monday"}} type={"colHeader"} />
      <Square entry={{text: "Tuesday"}} type={"colHeader"} />
      <Square entry={{text: "Wednesday"}} type={"colHeader"} />
      <Square entry={{text: "Thursday"}} type={"colHeader"} />
      <Square entry={{text: "Friday"}} type={"colHeader"} />
      <Square entry={{text: "Saturday"}} type={"colHeader"} dayType={"weekend"} />
      <Square entry={{text: "Sunday"}} type={"colHeader"} dayType={"weekend"} />
    </Box>
  );
};
