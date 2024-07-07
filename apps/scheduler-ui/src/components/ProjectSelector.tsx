import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { testData } from "../testData.ts";
import { FormControl } from "@mui/material";
import { projects } from "../test-data";
import { CheckBoxList } from "./check-box-list";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/joy";

export const ProjectSelector = ({checkedProjects, setCheckedProjects}) => {
  return (
    <Accordion elevation={0} sx={{width: "100%"}} defaultExpanded>
      <AccordionSummary>Select Projects</AccordionSummary>
      <AccordionDetails>
        <CheckBoxList
            parent={"All Projects"}
            checkedProjects={checkedProjects}
            setCheckedProjects={setCheckedProjects}
        />
      </AccordionDetails>
    </Accordion>
    // <Box sx={{ minWidth: 120, width: "100%", mb: 2 }}>
    //   <FormControl variant="standard" fullWidth>
    //     <InputLabel id="select-projectName-label">Select Projects</InputLabel>
    //     <Select
    //       id="select-projectName"
    //       value={projectName}
    //       label="Select project"
    //       onChange={handleChange}
    //       fullWidth={true}
    //     >
    //       <MenuItem value={"All Projects"}>All Projects</MenuItem>
    //       <MenuItem value={"user"}>My projects</MenuItem>
    //       {projects.sort().map((project) => (
    //         <MenuItem value={project.name} key={project.name} width={"100%"}>
    //           {project.name}
    //         </MenuItem>
    //       ))}
    //     </Select>
    //   </FormControl>
    // </Box>
  );
};
