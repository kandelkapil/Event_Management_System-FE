import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashbaoard from "#views/Dashboard";
import PrivateRoute from "#views/PrivateRoute/PrivateRoute";
import UserProfile from "#views/UserProfile";
import SignUp from "#views/SignUp";
import Login from "#views/Login";
import Events from "#views/Events";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashbaoard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* <Route
          element={
            <PrivateRoute
              allowedRoles={[ROLES.ROLE_MODERATOR, ROLES.ROLE_ADMIN]}
            />
          }
        >
          <Route path="/user-list" element={<UserList />} />
        </Route> */}

        {/* <Route
          element={
            <PrivateRoute
              allowedRoles={[
                ROLES.ROLE_MODERATOR,
                ROLES.ROLE_ADMIN,
                ROLES.ROLE_USER,
              ]}
            />
          }
        >
          <Route path="/profile" element={<UserProfile />} />
        </Route> */}

        {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}
        <Route path="*" element={<h1>Error page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
