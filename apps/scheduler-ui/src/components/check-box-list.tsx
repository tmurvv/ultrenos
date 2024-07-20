import * as React from "react";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";

import { projects } from "../test-data";
import { UserContext } from "../App";
import { useContext, useState } from "react";
import { isEmpty } from "lodash";
import { StringIndexedObject } from "./MainView";

interface CheckBoxListProps {
  parent: string;
  checkedProjects: object;
  setCheckedProjects: React.Dispatch<
    React.SetStateAction<StringIndexedObject<boolean>>
  >;
}

export const CheckBoxList = ({
  parent,
  checkedProjects,
  setCheckedProjects,
}: CheckBoxListProps) => {
  const { user } = useContext(UserContext);
  const [userOnly, setUserOnly] = useState(false);
  const handleCheckboxChange = (e) => {
    setCheckedProjects({
      ...checkedProjects,
      [e.target.id]: !checkedProjects[e.target.id],
    });
  };

  const handleSelectAllChange = (event) => {
    const isChecked = event.target.checked;
    let newObject = {};

    Object.keys(checkedProjects).forEach((item) => {
      newObject[item] = isChecked;
    });

    setCheckedProjects(newObject);
  };

  const handleUserProjectsChange = (event) => {
    const isChecked = event.target.checked;
    let newObject = {};

    if (isChecked) {
      Object.keys(checkedProjects).forEach((item) => {
        projects.forEach((project) => {
          newObject[project.name] =
            project.projectManager ===
            `${!user || user.firstName} ${!user || user.lastName}`;
        });
        setUserOnly(true);
      });
    } else {
      Object.keys(checkedProjects).forEach((item) => {
        newObject[item] = true;
      });
      setUserOnly(false);
    }
    setCheckedProjects(newObject);
  };

  const children = (
    <Box
      sx={{ display: "flex", flexDirection: "column", ml: 3, gap: 1, mt: 1 }}
    >
      {Object.keys(checkedProjects)
        .sort()
        .map((projectName, idx) => (
          <Checkbox
            id={projectName}
            checked={checkedProjects[projectName]}
            onChange={handleCheckboxChange}
            label={projectName}
          />
        ))}
    </Box>
  );

  return (
    <>
      <Box>
        <Checkbox
          id={"My Projects"}
          checked={checkedProjects["My Projects"]}
          onChange={handleUserProjectsChange}
          label={"My Projects"}
          indeterminate={!userOnly}
        />
      </Box>
      <Box>
        <Checkbox
          label={parent}
          checked={
            !isEmpty(checkedProjects) &&
            Object.keys(checkedProjects)?.every((key) => checkedProjects[key])
          }
          indeterminate={
            !Object.keys(checkedProjects)?.every((key) => checkedProjects[key])
          }
          onChange={handleSelectAllChange}
        />
        {children}
      </Box>
    </>
  );
};
