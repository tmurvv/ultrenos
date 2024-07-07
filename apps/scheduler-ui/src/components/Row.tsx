import { Box } from "@mui/material";
import { startCase } from "lodash";
import * as React from "react";
import {
  addDays,
  isEqual,
  startOfDay,
  parseISO,
  format,
  startOfWeek,
} from "date-fns";

import { Assignment } from "../interfaces";
import { assignments } from "../test-data";
import { getColorByFirstLast as getPMColor } from "../get-color-by-first-last";
import { getContrastByFirstLast as getContrast } from "../get-contrast-by-first-last";

import { Square } from "./Square.js";
import { useEffect, useState } from "react";

function areSameDays(date1, date2) {
  const day1 = startOfDay(parseISO(date1));
  const day2 = startOfDay(date2);

  // console.log("day1", day1);
  // console.log("day2", day2);

  return isEqual(day1, day2);
}

interface RowProps {
  resource: string;
}

const isSameResource = (resource1, resource2) => {
  return startCase(resource1) === resource2;
};

const getEntry = ({ filteredAssignments, date, resource }) => {
  for (const assignment of filteredAssignments) {
    if (
      areSameDays(assignment?.date, date) &&
      isSameResource(assignment?.resourceId, resource)
    ) {
      return {
        backgroundColor: getPMColor(assignment?.projectManagerId),
        color: getContrast(assignment?.projectManagerId),
        text: assignment?.projectName,
      };
    }
  }
};

export const Row: React.FC<RowProps> = ({
  resource,
  checkedProjects,
  currentWeekStart,
}) => {
  const [filteredAssignments, setFilteredAssignments] = useState([]);

  const assignmentsByResource: Assignment[] = filteredAssignments.filter(
    (assignment) => resource === startCase(assignment?.resourceId),
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
      <Square entry={{ text: resource }} type={"rowHeader"} />
      <Square
        entry={getEntry({
          date: currentWeekStart,
          resource,
          filteredAssignments,
        })}
      />
      <Square
        entry={getEntry({
          date: addDays(currentWeekStart, 1),
          resource,
          filteredAssignments,
        })}
      />
      <Square
        entry={getEntry({
          date: addDays(currentWeekStart, 2),
          resource,
          filteredAssignments,
        })}
      />
      <Square
          entry={getEntry({
              date: addDays(currentWeekStart, 3),
              resource,
              filteredAssignments,
          })}
      />
      <Square
          entry={getEntry({
              date: addDays(currentWeekStart, 4),
              resource,
              filteredAssignments,
          })}
      />
      <Square
          entry={getEntry({
              date: addDays(currentWeekStart, 5),
              resource,
              filteredAssignments,
          })}
        type={"weekend"}
      />
      <Square
          entry={getEntry({
              date: addDays(currentWeekStart, 6),
              resource,
              filteredAssignments,
          })}
        type={"weekend"}
      />
    </Box>
  );
};
