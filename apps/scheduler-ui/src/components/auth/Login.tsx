// packages
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";

// internal
// import LoginSignupCSS from "../styles/LoginSignup.css";
import { PageTitle } from "../PageTitle";
// import {Spinner} from "../Spinner"
import { UserContext } from "../../App";
import { ViewContext } from "../../App";
import { ViewContexts } from "../../enums/ViewContexts";
// import { AdminEditTimesheetsContext } from "../contexts/AdminEditTimesheetsContext";
import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { DEFAULT_USER } from "./DEFAULT_USER";
import { ComingSoonModal } from "../coming-soon-modal";
import { colorScheme } from "../../constants/colors";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 150,
  border: "9px double #757575",
  p: 4,
  backgroundColor: "#ffffff !important",
};

export const Login = ({ setPage }) => {
  const { user, setUser } = useContext(UserContext);
  const { setCurrentView } = useContext(ViewContext);
  const [open, setOpen] = useState(false);
  // // declare variables
  // const {setUser} = useContext(UserContext);
  // const {setAdminEditTimesheets} = useContext(AdminEditTimesheetsContext);
  // const [userLogin, setUserLogin] = useState({
  //     loginemail: '',
  //     loginpassword: '',
  //     loginchange: false
  // });
  // // handle change
  // const handleChange = (evt) => {
  //     setUserLogin({...userLogin, [evt.target.name]: evt.target.value, loginchange: true});
  // }
  // // handle submit
  const handleSubmit = async (evt) => {
    setUser(DEFAULT_USER);
    setCurrentView(ViewContexts.MAIN);
    console.log("userform login", user);
    // window.location.href = "/";
  };
  // const handleSubmit = async (evt) => {
  //     // start spinner
  //     if (document.querySelector('#spinner')) document.querySelector('#spinner').style.display="flex";
  //     try {
  //         // login user
  //         // const res = await axios.post(`https://timesheets-staging-api.ultrenos.ca/api/v1/ultrenostimesheets/users/login`, {email: userLogin.loginemail, password: userLogin.loginpassword});
  //         const res = await axios.post(`https://timesheets-staging-api.ultrenos.ca/api/v1/ultrenostimesheets/users/login`, {email: userLogin.loginemail, password: userLogin.loginpassword});
  //         const returnedUser = res.data.data;
  //         // set user context to login user
  //         setUser({
  //             firstname: returnedUser.firstname,
  //             lastname: returnedUser.lastname,
  //             email: returnedUser.email,
  //             role: returnedUser.role,
  //             id: returnedUser._id
  //         });
  //         // stop spinner
  //         if (document.querySelector('#spinner')) document.querySelector('#spinner').style.display="none";
  //         // in-app message
  //
  //         // set admin or user environment
  //         if (returnedUser&&returnedUser.role&&returnedUser.role.toUpperCase()==="ADMIN") {
  //             setPage('Dashboard');
  //             setAdminEditTimesheets(false);
  //         } else {
  //             setTimeout(()=>{alert(`Login successful. Welcome ${returnedUser.firstname}`)},200);
  //             setPage('EnterTimesheet');
  //             setAdminEditTimesheets(false);
  //         }
  //     } catch(e) {
  //         // log error
  //         console.log('error', e.message)
  //         if (e.response&&e.response.data&&e.response.data.message&&e.response.data.message==="User not found.") {
  //             if (document.querySelector('#spinner')) document.querySelector('#spinner').style.display="none";
  //             return setTimeout(()=>{alert('Email not found.')}, 200);
  //         }
  //         // Password does not match
  //         if (e.response&&e.response.data&&e.response.data.message&&e.response.data.message==="Password does not match our records.") {
  //             if (document.querySelector('#spinner')) document.querySelector('#spinner').style.display="none";
  //             return setTimeout(()=>{alert('Password does not match our records.')},200);
  //         }
  //         // All other errors
  //         if (document.querySelector('#spinner')) document.querySelector('#spinner').style.display="none";
  //         setTimeout(()=>{alert('Login not successful. Please check network connection.')}, 200);
  //     }
  // }
  // // handle forgotPassword
  // async function handleForgot() {
  //     // validate email entered
  //     if (!userLogin.loginemail) {
  //         alert('Please enter your account email.');
  //         return;
  //     }
  //     // start spinner
  //     if (document.querySelector('#spinner')) document.querySelector('#spinner').style.display="flex";
  //     try {
  //         // send forgot password email
  //         await axios.post(`https://timesheets-staging-api.ultrenos.ca/api/v1/ultrenostimesheets/users/sendresetemail`, {useremail: userLogin.loginemail});
  //         // in-app message
  //         setTimeout(()=>{alert('Please check your inbox for an email with instructions to reset your password..')}, 200);
  //         // stop spinner
  //         if (document.querySelector('#spinner')) document.querySelector('#spinner').style.display="none";
  //     } catch (e) {
  //         // log error
  //         console.log('error from reset password:', e.message);
  //         // in-app message
  //         setTimeout(()=>{alert('Something went wrong with password reset. Please check your network connection.')}, 200);
  //         // stop spinner
  //         if (document.querySelector('#spinner')) document.querySelector('#spinner').style.display="none";
  //     }
  // }
  // // set environment
  // useEffect(()=>{
  //     if (document.querySelector('#spinner')) document.querySelector('#spinner').style.display="none";
  // },[]);
  return (
    <>
      <Box width="100%" mt={4}>
        {/*<Spinner />*/}
        <PageTitle mainTitle="Scheduler Login" subTitle="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "10px",
            alignItems: "center",
          }}
          // style={{ cursor: "pointer", margin: "auto", width: "fit-content" }}
          // onClick={() => {
          //   setPage("Signup");
          // }}
        >
          <Typography variant={"h5"}>Click Submit to Login as a</Typography>
          <Typography variant={"h5"}>Demo User and View the WIP</Typography>
          <Button
            type="button"
            style={{
              width: "fit-content",
              fontStyle: "italic",
              fontSize: "16px",
              color: colorScheme.veryDarkBlue,
                marginTop: "20px",
            }}
            onClick={() => setOpen(true)}
          >
            Click Here to Signup
          </Button>
        </Box>
        <Box style={{ marginTop: "0" }}>
          <FormControl
            sx={{
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "25px",
                }}
              >
                <Box m={1}>
                  <TextField
                    // label={"Email"}
                    type="email"
                    id={uuid()}
                    // value={userLogin.loginemail}
                    value={"demoUser@example.com"}
                    // onChange={handleChange}
                    name="loginemail"
                    required
                    autoFocus
                    disabled
                  />
                </Box>
                <Box m={1}>
                  <TextField
                    disabled
                    // label={"Password"}
                    type="password"
                    id={uuid()}
                    // value={userLogin.loginpassword}
                    value={"demoPassword"}
                    // onChange={handleChange}
                    name="loginpassword"
                    required
                  />
                </Box>
              </Box>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="button"
                  variant="contained"
                  sx={{ backgroundColor: colorScheme.veryDarkBlue }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Box>
              <Box
                style={{ cursor: "pointer" }}
                // onClick={handleForgot}
              >
                <Button
                  type="button"
                  style={{
                    cursor: "pointer",
                    fontStyle: "italic",
                    fontSize: "16px",
                    marginTop: "15px",
                    color: colorScheme.veryDarkBlue,
                  }}
                  onClick={() => setOpen(true)}
                >
                  Change/Forgot Password
                </Button>
              </Box>
            </>
          </FormControl>
        </Box>
        <ComingSoonModal open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};
