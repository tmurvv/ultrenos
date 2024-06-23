import { Row } from "./Row";
import { MainViewHeaderRow } from "./MainViewHeaderRow";
import { resources } from "../test-data";
import { ProjectSelector } from "./ProjectSelector";
import { ViewSelector } from "./ViewSelector";
import { useState } from "react";

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
    <>
      <ProjectSelector
        projectName={projectName}
        setProjectName={setProjectName}
      />
      <ViewSelector viewName={viewName} setViewName={setViewName} />
      <MainViewHeaderRow />
      {resourceNames.map((resource) => (
        <Row resource={resource} />
      ))}
    </>
  );
};
