import { Box, Button, Modal, Typography } from "@mui/material";
import {colorScheme} from "../constants/colors";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  height: 150,
  border: "9px double #757575",
  p: 4,
  backgroundColor: "#ffffff !important",
};

export const ComingSoonModal = ({ open, setOpen }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          height: "300px",
          width: "300px",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: `9px double ${colorScheme.blue}`,
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          mt={2}
        >
          <Box
            component={"img"}
            alt={"hammering hammer"}
            src={"/img/hammer.gif"}
            sx={{ height: "80px" }}
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={2}
        >
          <Typography>Coming Soon !!</Typography>
          <Box m={2}>
            <Button onClick={() => setOpen(false)} variant={"contained"} sx={{backgroundColor: colorScheme.blue}}>
              OK
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
