import { Box } from "@mui/material";
import {camelCase, startCase} from "lodash";
import { Square } from "./Square.js";

import { assignments } from "../test-data";

export const Row = ({ resource }) => {
  const assignmentsByResource = assignments.filter((assignment) => {
    console.log("resource", resource);
    console.log("assignment", assignment.resource);
    return resource === startCase(assignment.resource);
  });
  console.log("assignmentsByResource", assignmentsByResource);
  return (
    <Box display={"flex"}>
      <Square text={resource} type={"rowHeader"} />
      <Square text={assignmentsByResource?.[0]?.jobSite?.name}/>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square type={"weekend"} />
      <Square type={"weekend"} />
    </Box>
  );
};
