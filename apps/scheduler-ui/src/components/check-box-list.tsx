import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";

export const CheckBoxList = ({
  parent,
  checkedProjects,
  setCheckedProjects,
}) => {
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

  const children = (
    <Box
      sx={{ display: "flex", flexDirection: "column", ml: 3, gap: 1, mt: 1 }}
    >
      {Object.keys(checkedProjects).map((projectName, idx) => (
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
  );
};
