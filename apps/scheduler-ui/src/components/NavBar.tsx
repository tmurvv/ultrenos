// packages
import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Box, List } from "@mui/material";
import { UserContext, ViewContext } from "../App";
import { ViewContexts } from "../enums/ViewContexts";
import { UserRoles } from "../enums/UserRoles";
import { DEFAULT_USER } from "./auth/DEFAULT_USER";
import { useEffect } from "react";
//internal
// import {PageContext} from '../contexts/PageContext.js';
// import {UserContext} from '../contexts/UserContext.js';
// import {AdminEditTimesheetsContext} from '../contexts/AdminEditTimesheetsContext.js';
// import {USER_INIT} from '../constants/inits';
// import NavBarCss from '../styles/NavBar.css.js'

const { AUTH, DASHBOARD, LOGIN, MAIN } = ViewContexts;
const { ADMIN } = UserRoles;

const sx = {
  body: {
    "box-sizing": "border-box",
    navBarOuter: {
      background: "#f9bf1e",
      "background-image":
        "linear-gradient(340deg, #f9bf1e 50%, #fffbb5 58%, #ffe58a 74%, #f9bf1e 87%)",
      height: "40px",
      "border-bottom": "1px solid grey",
    },
    "navBarOuter>div": {
      height: "100%",
    },
    navLinks: {
      height: "100%",
      display: "flex",
      "-webkit-justify-content": "space-between",
      "justify-content": "space-evenly",
      "align-items": "center",
      position: "relative",
      color: "black !important",
    },
    ul: {
      "list-style": "none",
      "font-size": "14px",
      "margin-block": "0",
      "padding-inline-start": "0",
    },
    ".navLinks a": {
      "font-size": "16px",
    },
    a: {
      "font-family": "'avenir'",
      "font-size": "16px",
      "text-decoration": "none",
      color: "#000000",
      opacity: "1",
      flex: "2",
      "text-align": "center",
    },
    "a:hover": {
      opacity: "1",
    },
    "hamburgerMenu img": {
      height: "35px",
    },
    "closeIcon img": {
      height: "25px",
      position: "absolute",
      top: "0",
      left: "0",
    },
  },
};
export const NavBar = () => {
  const { setCurrentView } = React.useContext(ViewContext);
  const { user, setUser } = React.useContext(UserContext);
  // const {setAdminEditTimesheets} = useContext(AdminEditTimesheetsContext);
  // const [mobile, setMobile] = useState();
  const [open, setOpen] = React.useState(false);
  // const handleResize = () => {
  //     // css media queries rounding is slightly different.
  //     //Using <= and then >= instead of <= and > (without the=) eliminates the rounding issues
  //     window.innerWidth<=550&&setMobile(true);
  //     window.innerWidth>=551&&setMobile(false);
  //     window.innerWidth>=551&&setOpen(true);
  // }
  // // set mobile environment
  // useEffect(()=>handleResize());
  // // reset window width on window resize
  // useEffect(() => {

  // window.addEventListener('resize', handleResize);
  // return () => { window.removeEventListener('resize', handleResize) }
  // }, []);
  return (
    <>
      <Box sx={sx.body.navBarOuter}>
        <Router>
          <nav style={{ height: "100%" }}>
            {open && <p>{open}</p>}
            <List sx={sx.body.navLinks}>
              {user?.email && (
                <li style={{ fontSize: "16px" }}>
                  {user.email ? (
                    <Link
                      to="/"
                      onClick={() => setCurrentView(ViewContexts.MAIN)}
                    >
                      Welcome {user?.firstName}
                    </Link>
                  ) : (
                    <Link
                      to="/Auth/Login"
                      onClick={() => {
                        setOpen(false);
                        setCurrentView(ViewContexts.AUTH);
                      }}
                    >
                      Login
                    </Link>
                  )}
                </li>
              )}
              {user?.roles?.includes(ADMIN) && (
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      setOpen(false);
                      setCurrentView(DASHBOARD);
                    }}
                  >
                    Admin
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    if (user?.email) {
                      setOpen(false);
                      setCurrentView(MAIN);
                    } else {
                      alert("Please Login to enter Timesheets.");
                      setCurrentView(AUTH);
                      setOpen(false);
                    }
                  }}
                >
                  Week View
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    if (user?.email) {
                      setOpen(false);
                      setCurrentView(MAIN);
                    } else {
                      alert("Please Login to view Timesheets.");
                      setCurrentView(AUTH);
                      setOpen(false);
                    }
                  }}
                >
                  Month View
                </Link>
              </li>
              <li>
                <Link
                  to="/view-by-resource"
                  onClick={() => {
                    if (user?.email) {
                      setOpen(false);
                      setCurrentView(MAIN);
                    } else {
                      alert("Please Login to view Timesheets.");
                      setCurrentView(AUTH);
                      setOpen(false);
                    }
                  }}
                  style={{ color: "black !important" }}
                >
                  View By Resource
                </Link>
              </li>
              {!user?.email && (
                <li style={{ fontSize: "16px" }}>
                  <Link
                    to="Auth/Login"
                    onClick={() => {
                      setOpen(false);
                      // setCurrentView(LOGIN);
                    }}
                  >
                    Login
                  </Link>
                </li>
              )}
              {user?.email && (
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      setCurrentView("profile");
                      setOpen(false);
                    }}
                  >
                    Profile
                  </Link>
                </li>
              )}
              <li>
                {user?.email ? (
                  <Link
                    to="/Auth/Login"
                    onClick={() => {
                      setUser(null);
                      setCurrentView(LOGIN);
                      setOpen(false);
                    }}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/"
                    onClick={() => {
                      setOpen(false);
                      setCurrentView(AUTH);
                    }}
                  >
                    Signup
                  </Link>
                )}
              </li>
            </List>
          </nav>
        </Router>

        {/*}*/}
      </Box>
    </>
  );
};
