import * as React from "react";
import { Box, CssBaseline } from "@mui/material";

import { MainView } from "./components/MainView";
import { AuthView } from "./components/auth/AuthView";
import { Login } from "./components/auth/Login";
import { Dashboard } from "./components/Dashboard";
import { ViewContexts } from "./enums/ViewContexts";
import { User } from "./interfaces/User";
import { UserRoles } from "./enums/UserRoles";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import {DEFAULT_USER} from "./components/auth/DEFAULT_USER";

const { AUTH, LOGIN, MAIN, DASHBOARD } = ViewContexts;

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
  const [user, setUser] = React.useState<User>();

  const [currentView, setCurrentView] = React.useState<string>(
    ViewContexts.AUTH,
  );

  React.useEffect(() => {
    if (!user) {
      setCurrentView(LOGIN);
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {currentView === AUTH && <AuthView />}
          {currentView === LOGIN && <Login />}
          {currentView === MAIN && <MainView />}
          {currentView === DASHBOARD && <Dashboard />}
        </Box>
      </ViewContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
