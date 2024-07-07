import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl } from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Radio,
  RadioGroup,
} from "@mui/joy";
import { ViewContexts } from "../enums/ViewContexts";
import { startCase } from "lodash";
import { ComingSoonModal, comingSoonModal } from "./coming-soon-modal";

const { DAY, WEEK, MONTH, RESOURCE } = ViewContexts;

type ViewSelectorProps = {
  viewName: string;
  setViewName: React.Dispatch<React.SetStateAction<string>>;
};

export const ViewSelector: React.FC<ViewSelectorProps> = ({
  viewName,
  setViewName,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setViewName(event.target.value as string);
  };

  return (
    <>
      <Accordion m={2} sx={{ width: "100%" }}>
        <AccordionSummary>Select View</AccordionSummary>
        <AccordionDetails>
          {/*<Box*/}
          {/*    sx={{*/}
          {/*      justifyContent: "right",*/}
          {/*      alignItems: "right",*/}
          {/*      width: "200px",*/}
          {/*      mb: 2,*/}
          {/*    }}*/}
          {/*>*/}
          {/*  <FormControl variant="standard" sx={{ width: "100%" }}>*/}
          {/*    <InputLabel id="select-viewName-label">Select View</InputLabel>*/}
          <RadioGroup
            id="select-viewName"
            // value={viewName}
            value={WEEK}
            // onChange={handleChange}
            onChange={() => setOpen(true)}
          >
            <Radio label={startCase(DAY)} value={DAY}>
              Day
            </Radio>
            <Radio label={startCase(WEEK)} value={WEEK}>
              Week
            </Radio>
            <Radio label={startCase(MONTH)} value={MONTH}>
              Month
            </Radio>
            <Radio label={startCase(RESOURCE)} value={RESOURCE}>
              By Resource
            </Radio>
          </RadioGroup>
          {/*  </FormControl>*/}
          {/*</Box>*/}
        </AccordionDetails>
      </Accordion>
      <ComingSoonModal open={open} setOpen={setOpen} />
    </>
  );
};
