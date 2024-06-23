// packages
import * as React from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";

// internal
// import PageTitle from '../components/PageTitle';
// import {USER_INIT} from '../constants/inits';
import { PageTitle } from "../PageTitle";
import { UserContext } from "../../App";
import { User } from "../../interfaces/User";
// import Spinner from "./Spinner";
type CurrentUser = User | null;
const sx = {};
export const SignUp = ({ setPage }) => {
  // declare variables
  const { setUser } = React.useContext(UserContext);
  const [signupUser, setSignupUser] = React.useState<CurrentUser>();

  const handleChange = (evt) => {
    setSignupUser({
      ...signupUser,
      [evt.target.name]: evt.target.value,
      change: true,
    });
  };
  const handleSubmit = async (evt) => {
    // validations
    if (!signupUser?.firstname || signupUser?.firstname.length < 1) {
      return alert("First name is required.");
    }
    if (!signupUser?.lastname || signupUser?.lastname.length < 1) {
      return alert("Last name is required.");
    }
    if (!signupUser?.password || signupUser?.password.length < 8) {
      return alert("Passwords must be at least 8 characters.");
    }
    if (signupUser?.email !== signupUser?.confirmemail) {
      return alert("Emails do not match.");
    }
    if (signupUser?.password !== signupUser?.confirmpassword) {
      return alert("Passwords do not match.");
    }
    // start spinner
    if (document.querySelector("#spinner"))
      document.querySelector("#spinner").style.display = "flex";
    // create signup user object
    const newUser = {
      firstname: signupUser?.firstname,
      lastname: signupUser?.lastname,
      email: signupUser?.email,
      password: signupUser?.password,
      id: uuid(),
    };
    try {
      // signup user
      const res = await axios.put(
        `http://localhost:7050/v1/users/${signupUser?.id}`,
        newUser,
      );
      if (res.status === 201 || res.status === 200) {
        // set userContext to added user
        const addeduser = res.data.newuser;
        setUser({
          firstname: addeduser.firstname,
          lastname: addeduser.lastname,
          email: addeduser.email,
        });
        // in-app message
        alert("Signup Successful.");
        // set environment
        setPage("EnterTimesheet");
      }
      // stop spinner
      if (document.querySelector("#spinner"))
        document.querySelector("#spinner").style.display = "none";
    } catch (e) {
      // log error
      console.log("Error on signup", e.response);
      // in-app message
      if (
        e.response &&
        e.response.data &&
        e.response.data.message.toUpperCase().includes("EXISTS")
      ) {
        // email in use
        alert("Email already in use.");
      } else {
        // all other errors
        alert(
          `Something went wrong on signup. Please check your network connection.`,
        );
      }
      // stop spinner
      if (document.querySelector("#spinner"))
        document.querySelector("#spinner").style.display = "none";
    }
  };
  // set environment
  React.useEffect(() => {
    if (document.querySelector("#spinner"))
      document.querySelector("#spinner").style.display = "none";
  }, []);
  return (
    <>
      <Box py={4}>
        {/*<Spinner />*/}
        <PageTitle maintitle="Signup" subtitle="" />
        <Box
          style={{ cursor: "pointer", margin: "auto", width: "fit-content" }}
          onClick={() => {
            setPage("Login");
          }}
        >
          <Button type="Button">Click Here to Login</Button>
        </Box>
        <Box mt={2} width={"320px"} id="signup">
          <form onSubmit={() => handleSubmit()}>
            <Box width={"100%"}>
              <Box sx={{ width: "100%" }}>
                <Typography element={"h3"}>
                  First Name<span style={{ color: "orangered" }}>*</span>
                </Typography>
              </Box>
              <TextField
                fullWidth
                id={uuid()}
                value={signupUser?.firstName}
                onChange={handleChange}
                name="firstname"
                required
              />
              <Box sx={sx.TextFieldName}>
                <Typography element={"h3"}>
                  Last Name<span style={{ color: "orangered" }}>*</span>
                </Typography>
              </Box>
              <TextField
                fullWidth
                id={uuid()}
                value={signupUser?.lastName}
                onChange={handleChange}
                name="lastname"
                required
              />
              <Box sx={{ ...sx.TextFieldName, ...sx.TextFieldMargin }}>
                <Typography element={"h3"}>
                  Email<span style={{ color: "orangered" }}>*</span>
                </Typography>
              </Box>
              <TextField
                fullWidth
                type="email"
                id={uuid()}
                value={signupUser?.email}
                onChange={handleChange}
                name="email"
                required
              />
              <Box sx={{ ...sx.TextFieldName, ...sx.TextFieldMargin }}>
                <Typography element={"h3"}>
                  Confirm Email<span style={{ color: "orangered" }}>*</span>
                </Typography>
              </Box>
              <TextField
                fullWidth
                type="email"
                id={uuid()}
                value={signupUser?.confirmEmail}
                onChange={handleChange}
                name="confirmEmail"
                required
              />
              <Box sx={{ ...sx.TextFieldName, ...sx.TextFieldMargin }}>
                <Typography element={"h3"}>
                  Password<span style={{ color: "orangered" }}>*</span>
                </Typography>
              </Box>
              <TextField
                fullWidth
                type="password"
                id={uuid()}
                value={signupUser?.password}
                onChange={handleChange}
                name="password"
                required
              />
              <Box sx={{ ...sx.TextFieldName, ...sx.TextFieldMargin }}>
                <Typography element={"h3"}>
                  Confirm Password<span style={{ color: "orangered" }}>*</span>
                </Typography>
              </Box>
              <TextField
                fullWidth
                type="password"
                id={uuid()}
                value={signupUser?.confirmPassword}
                onChange={handleChange}
                name="confirmpassword"
                required
              />
            </Box>
            <Box my={3}>
              <ButtonGroup
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly"
                }}
              >
                <Button
                  type="Button"
                  sx={{ alignItems: "center" }}
                  onClick={handleSubmit}
                  variant="contained"
                >
                  Submit
                </Button>
                <Button
                  type="Button"
                  onClick={() => setPage("Homepage")}
                  variant="contained"
                  sx={{color: "white", backgroundColor: "black"}}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};
