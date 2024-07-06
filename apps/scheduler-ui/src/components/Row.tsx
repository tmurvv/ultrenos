import { Box } from "@mui/material";
import { startCase } from "lodash";
import * as React from "react";

import { Assignment } from "../interfaces";
import { assignments } from "../test-data";

import { Square } from "./Square.js";

interface RowProps {
  resource: string;
}
const pmColors = {
  "Ketema Mulgeta": "cadetblue",
  "Emily Johnson": "lavender",
  "Michael Nguyen": "#bfbf1a",
  "Emma Roberts": "tomato",
};

export const Row: React.FC<RowProps> = ({ resource }) => {
  const assignmentsByResource: Assignment[] = assignments.filter(
    (assignment) => {
      console.log("resource", resource);
      console.log("assignment", assignment.resourceId);
      return resource === startCase(assignment.resourceId);
    },
  );
  console.log("assignmentsByResource", assignmentsByResource);
  return (
    <Box display={"flex"}>
      <Square text={resource} type={"rowHeader"} />
      <Square
        color={pmColors[assignmentsByResource?.[0]?.projectManagerId] ?? "#fff"}
        text={assignmentsByResource?.[0]?.projectName ?? ""}
      />
      <Square
        color={pmColors[assignmentsByResource?.[1]?.projectManagerId] ?? "#fff"}
        text={assignmentsByResource?.[1]?.projectName ?? ""}
      />
      <Square
        color={pmColors[assignmentsByResource?.[2]?.projectManagerId] ?? "#fff"}
        text={assignmentsByResource?.[2]?.projectName ?? ""}
      />
      <Square
        color={pmColors[assignmentsByResource?.[3]?.projectManagerId] ?? "#fff"}
        text={assignmentsByResource?.[3]?.projectName ?? ""}
      />
      <Square
        color={pmColors[assignmentsByResource?.[4]?.projectManagerId] ?? "#fff"}
        text={assignmentsByResource?.[4]?.projectName ?? ""}
      />
      <Square
        color={pmColors[assignmentsByResource?.[5]?.projectManagerId] ?? "#fff"}
        text={assignmentsByResource?.[5]?.projectName ?? ""}
        type={"weekend"}
      />
      <Square
        color={pmColors[assignmentsByResource?.[6]?.projectManagerId] ?? "#fff"}
        text={assignmentsByResource?.[6]?.projectName ?? ""}
        type={"weekend"}
      />
    </Box>
  );
};
