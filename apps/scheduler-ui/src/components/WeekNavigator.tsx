import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { addDays, format, startOfWeek } from 'date-fns';

interface WeekNavigatorProps {
  onWeekChange: (weekStart: Date) => void;
}

export const WeekNavigator: React.FC<WeekNavigatorProps> = ({ currentWeekStart, onWeekChange, setCurrentWeekStart}) => {

  const handlePrevWeek = () => {
    const prevWeekStart = addDays(currentWeekStart, -7);
    setCurrentWeekStart(prevWeekStart);
    onWeekChange(prevWeekStart);
  };

  const handleNextWeek = () => {
    const nextWeekStart = addDays(currentWeekStart, 7);
    setCurrentWeekStart(nextWeekStart);
    onWeekChange(nextWeekStart);
  };

  const formattedWeekStart = format(currentWeekStart, 'MMMM dd, yyyy');

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
