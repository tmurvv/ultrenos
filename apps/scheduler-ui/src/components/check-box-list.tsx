import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import { projects } from "../test-data";
import { UserContext } from "../App";
import { useContext, useState } from "react";

export const CheckBoxList = ({
  parent,
  checkedProjects,
  setCheckedProjects,
}) => {
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
        // console.log("user", user);
        // console.log("item", item);
        projects.forEach((project) => {
          if (
            project.projectManager ===
            `${!user || user.firstName} ${!user || user.lastName}`
          ) {
            console.log("project", project.projectManager);
            console.log(
              "username",
              `${!user || user.firstName} ${!user || user.lastName}`,
            );
            newObject[project.name] = true;
            console.log(newObject);
          } else {
            newObject[project.name] = false;
            console.log(newObject);
          }
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

      {Object.keys(checkedProjects).sort().map((projectName, idx) => (
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
          checked={Object.keys(checkedProjects)?.every(
            (key) => checkedProjects[key],
          )}
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
