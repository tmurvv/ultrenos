import * as React from "react";
import { Box, Typography } from "@mui/material";
import { UserRoles } from "../enums/UserRoles";
import { resources } from "../test-data";

interface LegendItem {
  name: string;
  color: string;
}

export const ProjectManagerColors: React.FC = () => {
  const projectManagers = resources.filter((resource) =>
    resource.roles.includes(UserRoles.PROJECT_MANAGER),
  );

  const legendItems: LegendItem[] = projectManagers.map((manager) => ({
    name: `${manager.firstName} ${manager.lastName}`,
    color: manager.color || "#000000", // Default color if not provided
  }));

  return (
    <Box>
        <Typography variant="h6" gutterBottom>Project Managers</Typography>
      <Box>
        <Typography variant="h6" gutterBottom></Typography>
        {legendItems.map((item, index) => (
          <Box key={index} display="flex" alignItems="center" mb={1}>
            <Box
              width={20}
              height={20}
              bgcolor={item.color}
              borderRadius={2}
              mr={1}
            />
            <Typography>{item.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
