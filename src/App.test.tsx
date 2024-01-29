import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "#contexts/Auth.context";
import { act } from "react-dom/test-utils";
import { useAuth } from "#hooks/useAuthHook"; // Import useAuth

jest.mock("#hooks/useAuthHook", () => ({
  __esModule: true,
  useAuth: jest.fn(),
}));

describe("App", () => {
  it("renders the App component with proper routes for logged-in user", async () => {
    // Mock useAuth to return a logged-in user
    (useAuth as jest.Mock).mockReturnValue({
      user: { userId: "123", profile_pic: "user-pic.jpg" },
    });

    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </MemoryRouter>
      );
    });

    // Ensure that the NavBar is rendered
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    // Ensure that the Events component is rendered
    expect(screen.getByText(/Events/i)).toBeInTheDocument();
  });

  it("renders the App component with proper routes for non-logged-in user", async () => {
    // Mock useAuth to return a non-logged-in user
    (useAuth as jest.Mock).mockReturnValue({ user: null });

    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </MemoryRouter>
      );
    });

    // Ensure that the NavBar is rendered
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    // Ensure that the Login component is rendered
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
