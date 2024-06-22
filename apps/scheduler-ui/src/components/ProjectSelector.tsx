import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { testData } from "../testData.ts";
import { FormControl } from "@mui/material";

export const ProjectSelector = ({ projectName, setProjectName }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setProjectName(event.target.value as string);
  };

  return (
    <Box
    sx={{ minWidth: 120, width: "fit-content", mb: 2}}
    >
      <FormControl variant="standard">
        <InputLabel id="select-projectName-label">Select Projects</InputLabel>
        <Select
          id="select-projectName"
          value={projectName}
          label="Select project"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>All projects</MenuItem>
          <MenuItem value={"user"}>My projects</MenuItem>
          {testData.projectNames.sort().map((project) => (
            <MenuItem value={project} key={project}>
              {project}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
