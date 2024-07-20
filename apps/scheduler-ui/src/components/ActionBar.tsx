import { WeekNavigator } from "./WeekNavigator";
import Box from "@mui/joy/Box";
import { ComingSoonModal } from "./coming-soon-modal";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { colorScheme } from "../constants/colors";

const AddAssignmentButton = ({ setOpen }) => {
  return (
    <Button
      sx={{
        color: colorScheme.teal,
        "&:hover": {
          backgroundColor: colorScheme.almostWhite,
        },
        "&:active": {
          backgroundColor: colorScheme.almostWhite,
        },
        mb: 0.5,
      }}
      variant={"outlined"}
      onClick={() => setOpen(true)}
    >
      Add Assignment
    </Button>
  );
};

export const ActionBar = ({ currentWeekStart, setCurrentWeekStart }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        mb={1}
      >
        <WeekNavigator
          currentWeekStart={currentWeekStart}
          setCurrentWeekStart={setCurrentWeekStart}
        />
        <Typography variant="h6">Week View</Typography>
        <AddAssignmentButton setOpen={setOpen} />
      </Box>
      <ComingSoonModal setOpen={setOpen} open={open} />
    </>
  );
};
