import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl } from "@mui/material";

export const ViewSelector = ({ viewName, setViewName }) => {
    const handleChange = (event: SelectChangeEvent) => {
        setViewName(event.target.value as string);
    };

    return (
        <Box
            sx={{ justifyContent: 'right', alignItems: 'right', width: "200px", mb: 2}}
        >
            <FormControl variant="standard" sx={{width: "100%"}}>
                <InputLabel id="select-viewName-label">Select View</InputLabel>
                <Select
                    id="select-viewName"
                    value={viewName}
                    label="Select view"
                    onChange={handleChange}
                >
                    <MenuItem value={"weeklyResource"}>Weekly by Resource</MenuItem>
                    <MenuItem value={"weeklyView"}>Weekly by View</MenuItem>
                    <MenuItem value={"dailyResource"}>Daily by Resource</MenuItem>
                    <MenuItem value={"dailyView"}>Daily by View</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
