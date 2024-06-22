import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import { MainView } from "./components";
import { ProjectSelector } from "./components";
import { ViewSelector } from "./components/ViewSelector";

function App() {
  const [projectName, setProjectName] = useState("all");
  const [viewName, setViewName] = useState("weeklyResource");
  console.log("pn", projectName);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ProjectSelector
          projectName={projectName}
          setProjectName={setProjectName}
        />
        <ViewSelector viewName={viewName} setViewName={setViewName} />
      </Box>
      <MainView />
    </Box>
  );
}

export default App;
