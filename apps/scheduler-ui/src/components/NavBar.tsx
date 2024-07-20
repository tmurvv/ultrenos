// packages
import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Box, List, Typography } from "@mui/material";
import { UserContext, ViewContext } from "../App";
import { ViewContexts } from "../enums/ViewContexts";
import { UserRoles } from "../enums/UserRoles";
import { colorScheme } from "../constants/colors";
import { ComingSoonModal } from "./coming-soon-modal";
import {DEFAULT_USER} from "./auth/DEFAULT_USER";

const { LOGIN } = ViewContexts;
const { ADMIN } = UserRoles;

const sx = {
  links: {
    fontSize: "20px",
    color: colorScheme.text,
    textDecoration: "none !important",
  },
  body: {
    "box-sizing": "border-box",
    navBarOuter: {
      // background: "#f9bf1e",
      "background-image": `linear-gradient(340deg, ${colorScheme.yellow} 50%, ${colorScheme.almostWhite}, ${colorScheme.yellow} 74%, ${colorScheme.yellow} 87%)`,
      height: "40px",
      "border-bottom": "1px solid grey",
    },
    "navBarOuter>div": {
      height: "100%",
    },
    navLinks: {
      height: "100%",
      display: "flex",
      "justify-content": "flex-end",
      "align-items": "center",
      position: "relative",
    },
    ul: {
      "list-style": "none",
      "font-size": "14px",
      // "margin-block": "0",
      // "padding-inline-start": "0",
    },
    // ".navLinks a": {
    //   "font-size": "16px",
    //   color: "#fff !important",
    // },
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
                <li style={{ fontSize: "16px", margin: "5px" }}>
                  {user.email ? (
                    <Box m={2} sx={sx.links}>
                      <Typography variant={"h6"}>Welcome {user?.firstName}</Typography>
                    </Box>
                  ) : (
                    <Box sx={{ color: colorScheme.text, margin: "5px" }}>
                      {/*<Link*/}
                      {/*  to="./Auth/Login"*/}
                      {/*  onClick={() => {*/}
                      {/*    setOpen(false);*/}
                      {/*    // setCurrentView(ViewContexts.AUTH);*/}
                      {/*  }}*/}
                      {/*  style={sx.links}*/}
                      {/*>*/}
                      {/*  Login*/}
                      {/*</Link>*/}
                    </Box>
                  )}
                </li>
              )}
              {user?.roles?.includes(ADMIN) && (
                <li style={sx.links}>
                  <Link
                    to="/"
                    onClick={() => {
                      setOpen(true);
                      // setCurrentView(DASHBOARD);
                    }}
                  >
                    Admin
                  </Link>
                </li>
              )}

              {!user?.email && (
                <li style={sx.links}>
                  {/*<Link*/}
                  {/*  to="Auth/Login"*/}
                  {/*  onClick={() => {*/}
                  {/*    setOpen(false);*/}
                  {/*    // setCurrentView(LOGIN);*/}
                  {/*  }}*/}
                  {/*>*/}
                  {/*  Login*/}
                  {/*</Link>*/}
                </li>
              )}
              {user?.email && (
                <Box style={sx.links}>
                  <Link
                    to="/"
                    onClick={() => {
                      // setCurrentView("profile");
                      setOpen(true);
                    }}
                  >
                    Profile
                  </Link>
                </Box>
              )}
              <li style={sx.links}>
                {user?.email ? (
                  <Box m={2} style={sx.links}>
                    <Link
                      to="/Auth/Login"
                      onClick={() => {
                        setUser({...DEFAULT_USER, email: "", roles: [], firstName: "", lastName: ""});
                        setCurrentView(LOGIN);
                        setOpen(false);
                      }}
                    >
                      Logout
                    </Link>
                  </Box>
                ) : (
                  <Box m={2} sx={sx.links}>
                    <Link
                      to="/"
                      onClick={() => {
                        setOpen(true);
                        // setCurrentView(AUTH);
                      }}
                    >
                      Signup
                    </Link>
                  </Box>
                )}
              </li>
            </List>
          </nav>
        </Router>
        {/*<Modal open={open} onClose={()=> setOpen(false)}>Coming Soon !!</Modal>*/}
        <ComingSoonModal open={open} setOpen={setOpen} />
        {/*}*/}
      </Box>
    </>
  );
};
