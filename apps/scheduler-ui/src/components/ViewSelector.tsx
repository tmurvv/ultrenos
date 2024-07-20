import * as React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Radio,
  RadioGroup,
} from "@mui/joy";
import { ViewContexts } from "../enums/ViewContexts";
import { startCase } from "lodash";
import { ComingSoonModal } from "./coming-soon-modal";

const { DAY, WEEK, MONTH, RESOURCE } = ViewContexts;

type ViewSelectorProps = {
  viewName: string;
  setViewName: React.Dispatch<React.SetStateAction<string>>;
};

export const ViewSelector: React.FC<ViewSelectorProps> = ({
  viewName,
  setViewName,
}) => {
  console.log(viewName, setViewName)
  const [open, setOpen] = React.useState(false);
  // const handleChange = (event: SelectChangeEvent) => {
  //   setViewName(event.target.value as string);
  // };

  return (
    <>
      <Accordion m={2} sx={{ width: "100%" }} defaultExpanded>
        <AccordionSummary>Select View</AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <ComingSoonModal open={open} setOpen={setOpen} />
    </>
  );
};
