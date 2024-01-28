import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserProfile from "#views/UserProfile";
import SignUp from "#views/SignUp";
import Login from "#views/Login";
import Events from "#views/Events";
import NavBar from "#components/NavBar";
import CreateEvents from "#views/Events/Views/EventForm";
import EventDetails from "#views/Events/Views/EventDetails";
import { useAuth } from "#hooks/useAuthHook";

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Allow access to /signup only when user is not logged in */}
        {!user?.userId && <Route path="/signup" element={<SignUp />} />}

        {/* Redirect to / if user is logged in and tries to access /signup */}
        {user?.userId && <Route path="/signup" element={<Navigate to="/" />} />}

        {/* Allow access to /login for both logged-in and non-logged-in users */}
        <Route path="/login" element={<Login />} />

        {/* For other routes, redirect to /login if not logged in */}
        {!user?.userId && <Route path="*" element={<Navigate to="/login" />} />}

        {user?.userId && (
          <>
            <Route path="/" element={<Events />} />
            {/* Render protected routes only when the user is logged in */}
            <Route path="/events" element={<Events />} />
            <Route path="/events/create" element={<CreateEvents />} />
            <Route path="/events/edit/:id" element={<CreateEvents />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/profile" element={<UserProfile />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
