import { Row } from "./Row";
import { MainViewHeaderRow } from "./MainViewHeaderRow";
import { resources } from "../test-data";
import { ProjectSelector } from "./ProjectSelector";
import { ViewSelector } from "./ViewSelector";
import { useState } from "react";
import { Grid } from "@mui/material";
import {ProjectManagerColors} from "./ProjectManagerColors";

const resourceSorted = resources.sort((a, b) =>
  a.lastName.localeCompare(b.lastName),
);

const resourceNames = resourceSorted.map(
  (resource) => `${resource.firstName} ${resource.lastName}`,
);

export const MainView = () => {
  const [projectName, setProjectName] = useState("all");
  const [viewName, setViewName] = useState("weeklyResource");
  return (
    <Grid container spacing={2} m={2} width="100%">
      <Grid item xs={1.5}>
        <Grid container direction="row">
          <ViewSelector viewName={viewName} setViewName={setViewName} />{" "}
          <ProjectSelector
            projectName={projectName}
            setProjectName={setProjectName}
          />
            <ProjectManagerColors/>
        </Grid>
      </Grid>
      <Grid item xs={10.5} width="100%">
        <MainViewHeaderRow />
        {resourceNames.map((resource) => (
          <Row resource={resource} />
        ))}
      </Grid>
    </Grid>
  );
};
