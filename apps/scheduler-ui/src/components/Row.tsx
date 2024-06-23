import { Box } from "@mui/material";
import {startCase} from "lodash";
import * as React from "react";

import {Assignment} from "../interfaces";
import { assignments } from "../test-data";


import { Square } from "./Square.js";

interface RowProps {
    resource: string;
}

export const Row: React.FC<RowProps> = ({ resource }) => {
  const assignmentsByResource: Assignment[] = assignments.filter(assignment => {
    console.log("resource", resource);
    console.log("assignment", assignment.resourceId);
    return resource === startCase(assignment.resourceId);
  });
  console.log("assignmentsByResource", assignmentsByResource);
  return (
    <Box display={"flex"}>
      <Square text={resource} type={"rowHeader"} />
      <Square text={assignmentsByResource?.[0]?.projectName ?? "project name not found"} type={"colHeader"}/>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square type={"weekend"} />
      <Square type={"weekend"} />
    </Box>
  );
};
