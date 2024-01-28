import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "#views/Dashboard";
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
        {!user?.userId && <Route path="*" element={<Navigate to="/login" />} />}
        {user?.userId && (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Render protected routes only when the user is logged in */}
            <Route path="/events/*" element={<Events />} />
            <Route path="/events/create" element={<CreateEvents />} />
            <Route path="/events/edit/:id" element={<CreateEvents />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/profile" element={<UserProfile />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
