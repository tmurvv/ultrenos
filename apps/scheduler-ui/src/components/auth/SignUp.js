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
import { UserRoles } from "../../enums/UserRoles";
// import Spinner from "./Spinner";
type CurrentUser = User | null;
type SignUpUser = CurrentUser & {
  change: boolean;
  confirmEmail: string;
  confirmPassword: string;
};
const sx = {};
const { PROJECT_MANAGER } = UserRoles;

interface HttpError extends Error {
  statusCode: number;
  message: string;
  response: {
    data: {
      message: string;
    };
  };
}

export const SignUp = ({ setPage }) => {
  // declare variables
  const { setUser } = React.useContext(UserContext);
  // const [signupUser, setSignupUser] = React.useState<CurrentUser>();
  const [signupUser, setSignupUser] = ({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name !== "passwordChangedAt") { // TODO: separate types from user to save from user on form
      setSignupUser({
        ...signupUser,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = async () => {
    // validations
    if (!signupUser?.firstName || signupUser?.firstName.length < 1) {
      return alert("First name is required.");
    }
    if (!signupUser?.lastName || signupUser?.lastName.length < 1) {
      return alert("Last name is required.");
    }
    if (!signupUser?.password || signupUser?.password.length < 8) {
      return alert("Passwords must be at least 8 characters.");
    }
    if (signupUser?.email !== signupUser?.confirmEmail) {
      return alert("Emails do not match.");
    }
    if (signupUser?.password !== signupUser?.confirmPassword) {
      return alert("Passwords do not match.");
    }
    // start spinner
    // if (document.querySelector("#spinner"))
    //   document.querySelector("#spinner").style.display = "flex";
    // create signup user object
    const newUser: CurrentUser = {
      firstName: signupUser.firstName,
      lastName: signupUser.lastName,
      email: signupUser.email,
      password: signupUser.password,
      id: uuid(),
      passwordChangedAt: new Date(),
      roles: [PROJECT_MANAGER],
    };
    // passwordChangedAt: Date;
    // firstName: string;
    // lastName: string;
    // email: string;
    // password: string;
    // roles: UserRoles[];
    // id: string;
    try {
      // signup user
      const res = await axios.put(
        `http://localhost:7050/v1/users/${newUser?.id}`,
        newUser,
      );
      if (res.status === 201 || res.status === 200) {
        // set userContext to added user
        setUser(newUser);
        // in-app message
        alert("Signup Successful.");
        // set environment
        setPage("EnterTimesheet");
      }
      // stop spinner
      // if (document.querySelector("#spinner"))
      //   document.querySelector("#spinner").style.display = "none";
    } catch (e: unknown) {
      // log error
      // console.log("Error on signup", e?.response);
      // in-app message
      // if (
      //   typeof e === HttpError && e?.response?.data?.message?.toUpperCase()?.includes("EXISTS")
      // ) {
      //   // email in use
      //   alert("Email already in use.");
      // } else {
      // all other errors
      alert(
        `Something went wrong on signup. Please check your network connection.`,
      );
      // }
      // stop spinner
      // if (document.querySelector("#spinner"))
      //   document.querySelector("#spinner").style.display = "none";
    }
  };
  // set environment
  // React.useEffect(() => {
  //   if (document.querySelector("#spinner"))
  //     document.querySelector("#spinner").style.display = "none";
  // }, []);
  return (
    <>
      <Box py={4}>
        {/*<Spinner />*/}
        <PageTitle mainTitle="Signup" subTitle="" />
        <Box
          style={{ cursor: "pointer", margin: "auto", width: "fit-content" }}
          onClick={() => {
            setPage("Login");
          }}
        >
          <Button type="button">Click Here to Login</Button>
        </Box>
        <Box mt={2} width={"320px"} id="signup">
          <form onSubmit={() => handleSubmit()}>
            <Box width={"100%"}>
              <Box sx={{ width: "100%" }}>
                <Typography component={"h3"}>
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
              <Box>
                <Typography component={"h3"}>
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
              <Box>
                <Typography component={"h3"}>
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
              <Box>
                <Typography component={"h3"}>
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
              <Box>
                <Typography component={"h3"}>
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
              <Box>
                <Typography component={"h3"}>
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
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  type="button"
                  sx={{ alignItems: "center" }}
                  onClick={handleSubmit}
                  variant="contained"
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  onClick={() => setPage("Homepage")}
                  variant="contained"
                  sx={{ color: "white", backgroundColor: "black" }}
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
