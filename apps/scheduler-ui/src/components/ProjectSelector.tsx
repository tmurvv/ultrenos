import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import { CheckBoxList } from "./check-box-list";
import {StringIndexedObject} from "./MainView";

interface ProjectSelectorProps {
  checkedProjects: object;
  setCheckedProjects: React.Dispatch<React.SetStateAction<StringIndexedObject<boolean>>>;
}

export const ProjectSelector = ({ checkedProjects, setCheckedProjects }: ProjectSelectorProps) => {
  return (
    <Accordion elevation={0} sx={{ width: "100%" }} defaultExpanded>
      <AccordionSummary>Select Projects</AccordionSummary>
      <AccordionDetails>
        <CheckBoxList
          parent={"All Projects"}
          checkedProjects={checkedProjects}
          setCheckedProjects={setCheckedProjects}
        />
      </AccordionDetails>
    </Accordion>
  );
};
