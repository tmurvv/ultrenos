import { Box } from "@mui/material";
import { startCase } from "lodash";
import * as React from "react";
import { addDays, isEqual, startOfDay, parseISO } from "date-fns";
import { useEffect, useState } from "react";

import { assignments } from "../test-data";
import { getColorByFirstLast as getPMColor } from "../get-color-by-first-last";
import { getContrastByFirstLast as getContrast } from "../get-contrast-by-first-last";
import { Entry } from "../interfaces/Entry";
import { Assignment } from "../interfaces";

import { Square } from "./Square.js";

interface AreSameDaysParams {
    date1: string;
    date2: Date;
}

const areSameDays = ({date1, date2}: AreSameDaysParams) =>
  isEqual(startOfDay(parseISO(date1)), startOfDay(date2));

interface RowProps {
  currentWeekStart: Date;
  resource: string;
  checkedProjects: object;
}

interface IsSameResourceParams {
  resource1: string;
  resource2: string;
}

const isSameResource = ({
  resource1,
  resource2,
}: IsSameResourceParams): boolean => {
  return startCase(resource1) === resource2;
};

interface GetEntryParams {
  filteredAssignments: Assignment[];
  date: Date;
  resource: string;
}

const getEntry = ({
  filteredAssignments,
  date,
  resource,
}: GetEntryParams): Entry => {
  if (!date) return { text: "" };

  for (const assignment of filteredAssignments) {
    if (!assignment) continue;

    if (
      date &&
      areSameDays({date1: assignment.date, date2: date}) &&
      isSameResource({ resource1: assignment.resourceId, resource2: resource })
    ) {
      return {
        backgroundColor: getPMColor(assignment.projectManagerId),
        color: getContrast(assignment.projectManagerId),
        text: assignment.projectName ?? "",
      };
    }
  }

  return { text: "" };
};

export const Row: React.FC<RowProps> = ({
  resource,
  checkedProjects,
  currentWeekStart,
}) => {
  const [filteredAssignments, setFilteredAssignments] = useState([]);

  useEffect(() => {
    const initialFiltered = assignments.map((assignment) => {
      if (checkedProjects[assignment?.projectName] ?? false) {
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
