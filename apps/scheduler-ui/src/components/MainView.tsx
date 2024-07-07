import { Row } from "./Row";
import { MainViewHeaderRow } from "./MainViewHeaderRow";
import { resources } from "../test-data";
import { ProjectSelector } from "./ProjectSelector";
import { ViewSelector } from "./ViewSelector";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ProjectManagerColors } from "./ProjectManagerColors";
import { projects } from "../test-data";
import { WeekNavigator } from "./WeekNavigator";
import { startOfWeek } from "date-fns";

const resourceSorted = resources.sort((a, b) =>
  a.lastName.localeCompare(b.lastName),
);

const resourceNames = resourceSorted.map(
  (resource) => `${resource.firstName} ${resource.lastName}`,
);

export const MainView = () => {
  const [viewName, setViewName] = useState("weeklyResource");
  const [checkedProjects, setCheckedProjects] = useState({});

  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(
    startOfWeek(new Date(), { weekStartsOn: 1 }),
  );

  useEffect(() => {
    const initialCheckedProjects = projects.reduce((acc, project) => {
      return { ...acc, [project.name]: true };
    }, {});
    // console.log("initialCheckedProjects", initialCheckedProjects);
    setCheckedProjects(initialCheckedProjects);
  }, []);

  useEffect(() => {
    const monday = startOfWeek(new Date(), { weekStartsOn: 1 });
    setCurrentWeekStart(monday);
  }, []);

  return (
    <Grid container spacing={2} m={2} width="100%">
      <Grid item xs={1.5}>
        <Grid mt={4} container spacing={3} direction="row">
          <Grid item width={"100%"}>
            <ViewSelector viewName={viewName} setViewName={setViewName} />
          </Grid>
          <Grid item width={"100%"}>
            <ProjectSelector
              checkedProjects={checkedProjects}
              setCheckedProjects={setCheckedProjects}
            />
          </Grid>
          <Grid item width={"100%"}>
            <ProjectManagerColors />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10.5} width="100%">
        <WeekNavigator
          currentWeekStart={currentWeekStart}
          setCurrentWeekStart={setCurrentWeekStart}
          onWeekChange={(mondayDate) => console.log("cheange")}
        />
        <MainViewHeaderRow />
        {resourceNames.map((resource) => (
          <Row
            resource={resource}
            checkedProjects={checkedProjects}
            currentWeekStart={currentWeekStart}
          />
        ))}
      </Grid>
    </Grid>
  );
};
