import {Box} from "@mui/material";
import {SignUp} from "./SignUp";

export const AuthView = () => {
    return (
        <Box display={"flex"} width={"100%"} justifyContent={"center"}>
            <SignUp/>
        </Box>
    );
};