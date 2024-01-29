import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./index";
import { AuthProvider } from "#contexts/Auth.context";

// Mock the useAuth hook
jest.mock("#hooks/useAuthHook", () => ({
  useAuth: jest.fn(),
}));

describe("NavBar Component", () => {
  it("renders correctly with user", () => {
    // Mock the useAuth hook to return a user
    (jest.requireMock("#hooks/useAuthHook") as any).useAuth.mockReturnValue({
      user: { userId: "123", profile_pic: "user-pic.jpg" },
    });

    render(
      <MemoryRouter>
        <AuthProvider>
          <NavBar />
        </AuthProvider>
      </MemoryRouter>
    );

    // Check if the "Events Manager" link is rendered
    expect(screen.getByText("Events Manager")).toBeInTheDocument();

    // Check if the "Events" link is rendered
    expect(screen.getByText("Events")).toBeInTheDocument();

    // Check if the LoginDrawer component is rendered
    expect(screen.getByAltText("user-logo")).toBeInTheDocument();
  });

  it("renders correctly without user", () => {
    // Mock the useAuth hook to return no user
    (jest.requireMock("#hooks/useAuthHook") as any).useAuth.mockReturnValue({
      user: null,
    });

    render(
      <MemoryRouter>
        <AuthProvider>
          <NavBar />
        </AuthProvider>
      </MemoryRouter>
    );

    // Check if the "Events Manager" link is rendered
    expect(screen.getByText("Events Manager")).toBeInTheDocument();

    // Check if the "Events" link is rendered
    expect(screen.getByText("Events")).toBeInTheDocument();

    // Check if the "Login" link is rendered
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
