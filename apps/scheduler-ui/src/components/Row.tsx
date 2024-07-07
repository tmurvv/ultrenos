import { Box } from "@mui/material";
import { startCase } from "lodash";
import * as React from "react";

import { Assignment } from "../interfaces";
import { assignments } from "../test-data";

import { Square } from "./Square.js";
import { getColorByFirstLast as getPMColor } from "../get-color-by-first-last";
import { getContrastByFirstLast as getContrast } from "../get-contrast-by-first-last";
import { useEffect, useState } from "react";

interface RowProps {
  resource: string;
}
const pmColors = {
  "Ketema Mulgeta": "cadetblue",
  "Emily Johnson": "lavender",
  "Michael Nguyen": "#bfbf1a",
  "Emma Roberts": "tomato",
};

export const Row: React.FC<RowProps> = ({ resource, checkedProjects }) => {
  const [filteredAssignments, setFilteredAssignments] = useState([]);

  const assignmentsByResource: Assignment[] = filteredAssignments.filter(
    (assignment) => resource === startCase(assignment?.resourceId)
  );

  useEffect(() => {
    const initialFiltered = assignments.map((assignment) => {
      if (checkedProjects[assignment?.projectName]) {
        return assignment;
      }
    });

    setFilteredAssignments(initialFiltered);
  }, [checkedProjects]);

  return (
    <Box display={"flex"}>
      <Square text={resource} type={"rowHeader"} />
      <Square
        backgroundColor={
          getPMColor(assignmentsByResource?.[0]?.projectManagerId) ?? "#fff"
        }
        color={
          getContrast(assignmentsByResource?.[0]?.projectManagerId) ?? "purple"
        }
        text={assignmentsByResource?.[0]?.projectName ?? ""}
      />
      <Square
        backgroundColor={
          getPMColor(assignmentsByResource?.[1]?.projectManagerId) ?? "#fff"
        }
        color={
          getContrast(assignmentsByResource?.[1]?.projectManagerId) ?? "purple"
        }
        text={assignmentsByResource?.[1]?.projectName ?? ""}
      />
      <Square
        backgroundColor={
          getPMColor(assignmentsByResource?.[2]?.projectManagerId) ?? "#fff"
        }
        color={
          getContrast(assignmentsByResource?.[2]?.projectManagerId) ?? "purple"
        }
        text={assignmentsByResource?.[2]?.projectName ?? ""}
      />
      <Square
        backgroundColor={
          getPMColor(assignmentsByResource?.[3]?.projectManagerId) ?? "#fff"
        }
        color={
          getContrast(assignmentsByResource?.[3]?.projectManagerId) ?? "purple"
        }
        text={assignmentsByResource?.[3]?.projectName ?? ""}
      />
      <Square
        backgroundColor={
          getPMColor(assignmentsByResource?.[4]?.projectManagerId) ?? "#fff"
        }
        color={
          getContrast(assignmentsByResource?.[4]?.projectManagerId) ?? "purple"
        }
        text={assignmentsByResource?.[4]?.projectName ?? ""}
      />
      <Square
        backgroundColor={
          getPMColor(assignmentsByResource?.[5]?.projectManagerId) ?? "#fff"
        }
        color={
          getContrast(assignmentsByResource?.[5]?.projectManagerId) ?? "purple"
        }
        text={assignmentsByResource?.[5]?.projectName ?? ""}
        type={"weekend"}
      />
      <Square
        backgroundColor={
          getPMColor(assignmentsByResource?.[6]?.projectManagerId) ?? "#fdfafa"
        }
        color={
          getContrast(assignmentsByResource?.[6]?.projectManagerId) ?? "#fff"
        }
        text={assignmentsByResource?.[6]?.projectName ?? ""}
        type={"weekend"}
      />
    </Box>
  );
};
