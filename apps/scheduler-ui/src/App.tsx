import * as React from "react";
import { Box, Typography } from "@mui/material";
import { MainView } from "./components/MainView";
import { AuthView } from "./components/auth/AuthView";
import { Dashboard } from "./components/Dashboard";
import { ViewContexts } from "./enums/ViewContexts";
import { User } from "./interfaces/User";
import { UserRoles } from "./enums/UserRoles";
// import { testData } from "./testData.ts";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";

const { AUTH, MAIN, DASHBOARD } = ViewContexts;
type CurrentUser = User | null;

export const ViewContext = React.createContext<{
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}>({
  currentView: "",
  setCurrentView: () => {},
});

export const UserContext = React.createContext<{
  user: CurrentUser;
  setUser: React.Dispatch<React.SetStateAction<CurrentUser>>;
}>({
  user: null,
  setUser: () => {},
});

function App() {
  const [currentView, setCurrentView] = React.useState<string>(
    ViewContexts.AUTH,
  );
  // const [user] = React.useState<User> (testData.users[0]);
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    console.log("user", user);
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
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            component={"img"}
            alt={"hammering hammer"}
            src={"/img/hammer.gif"}
            sx={{ height: "80px" }}
          />
          <Typography variant={"h4"}>Under Construction</Typography>
          <Typography variant={"h6"}>Not Yet Functional</Typography>
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
