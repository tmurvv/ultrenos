import * as React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { addDays, format } from "date-fns";

interface WeekNavigatorProps {
  currentWeekStart: Date;
  setCurrentWeekStart: React.Dispatch<React.SetStateAction<Date>>;
}

export const WeekNavigator: React.FC<WeekNavigatorProps> = ({
  currentWeekStart,
  setCurrentWeekStart,
}) => {
  const handlePrevWeek = () => {
    const prevWeekStart = addDays(currentWeekStart, -7);
    setCurrentWeekStart(prevWeekStart);
  };

  const handleNextWeek = () => {
    const nextWeekStart = addDays(currentWeekStart, 7);
    setCurrentWeekStart(nextWeekStart);
  };

  const formattedWeekStart = format(currentWeekStart, "MMMM dd, yyyy");

  return (
    <Box display="flex" alignItems="center" justifyContent="left">
      <IconButton onClick={handlePrevWeek}>
        <ArrowBackIosIcon />
      </IconButton>
      <Typography variant="h6">{formattedWeekStart}</Typography>
      <IconButton onClick={handleNextWeek}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
