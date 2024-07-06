import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { testData } from "../testData.ts";
import { FormControl } from "@mui/material";

type ProjectSelectorProps = {
  projectName: string;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
};

export const ProjectSelector: React.FC<ProjectSelectorProps> = ({
  projectName,
  setProjectName,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setProjectName(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, width: "100%", mb: 2 }}>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="select-projectName-label">Select Projects</InputLabel>
        <Select
          id="select-projectName"
          // defaultValue={"all"}
          value={projectName}
          label="Select project"
          onChange={handleChange}
          fullWidth = {true}
          mr={1}
        >
          <MenuItem value={"all"}>All projects</MenuItem>
          <MenuItem value={"user"}>My projects</MenuItem>
          {testData.projectNames.sort().map((project) => (
            <MenuItem value={project} key={project} width={"100%"}>
              {project}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
