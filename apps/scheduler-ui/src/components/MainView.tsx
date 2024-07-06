import { Row } from "./Row";
import { MainViewHeaderRow } from "./MainViewHeaderRow";
import { resources } from "../test-data";
import { ProjectSelector } from "./ProjectSelector";
import { ViewSelector } from "./ViewSelector";
import { useState } from "react";
import { Box } from "@mui/material";

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
    <Box display="flex" m={2} width={"100%"}>
      <Box flex={2} display="flex" flexDirection="column">
        <ProjectSelector
          projectName={projectName}
          setProjectName={setProjectName}
        />
        <ViewSelector viewName={viewName} setViewName={setViewName} />
      </Box>
      <Box flex={10} width={"100%"}>
        <MainViewHeaderRow />
        {resourceNames.map((resource) => (
          <Row resource={resource} />
        ))}
      </Box>
    </Box>
  );
};
