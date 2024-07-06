import * as React from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { MainView } from "./components/MainView";
import { AuthView } from "./components/auth/AuthView";
import { Dashboard } from "./components/Dashboard";
import { ViewContexts } from "./enums/ViewContexts";
import { User } from "./interfaces/User";
import { UserRoles } from "./enums/UserRoles";
// import { testData } from "./testData.ts";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import {DEFAULT_USER} from "./components/auth/DEFAULT_USER";

const { AUTH, MAIN, DASHBOARD } = ViewContexts;
const { ADMIN, PROJECT_MANAGER } = UserRoles;
type CurrentUser = User | undefined;

export const ViewContext = React.createContext<{
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}>({
  currentView: "",
  setCurrentView: () => {},
});

const userContextValue: {
  user: CurrentUser;
  setUser: React.Dispatch<React.SetStateAction<CurrentUser>>;
} = {
  user: DEFAULT_USER,
  setUser: () => {},
};

export const UserContext = React.createContext<{
  user: CurrentUser;
  setUser: React.Dispatch<React.SetStateAction<CurrentUser>>;
}>(userContextValue);

const sx = {
  body: { margin: 0 },
};
function App() {
  const [currentView, setCurrentView] = React.useState<string>(
    ViewContexts.AUTH,
  );
  const [user, setUser] = React.useState<User>(DEFAULT_USER);

  React.useEffect(() => {
    if (!user) {
      setCurrentView(AUTH);
    }
    if (user?.roles?.includes(UserRoles.ADMIN)) {
      setCurrentView(DASHBOARD);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ViewContext.Provider value={{ currentView, setCurrentView }}>
        <Banner />
        <NavBar />
        <CssBaseline />
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={2}>
          {/*<Box*/}
          {/*  component={"img"}*/}
          {/*  alt={"hammering hammer"}*/}
          {/*  src={"/img/hammer.gif"}*/}
          {/*  sx={{ width: "80px" }}*/}
          {/*/>*/}
          <Typography variant={"h4"}>{currentView==="main"?"Weekly View" : currentView}</Typography>
          <Typography variant={"h6"}>Under Construction</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {currentView === AUTH && <AuthView />}
          {currentView === MAIN && <MainView />}
          {currentView === DASHBOARD && <Dashboard />}
        </Box>
      </ViewContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
